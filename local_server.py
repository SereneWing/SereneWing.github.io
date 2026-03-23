#!/usr/bin/env python3
"""
Local Development Server for SereneWing

A simple HTTP server for viewing the project locally.
Configuration can be modified in config.json.
"""

import http.server
import socketserver
import json
import os
import sys
import webbrowser
from pathlib import Path

# Load configuration
CONFIG_FILE = Path(__file__).parent / "config.json"

def load_config():
    """Load server configuration from config.json"""
    if CONFIG_FILE.exists():
        with open(CONFIG_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    return {
        "server": {"host": "localhost", "port": 8000},
        "browse": {"auto_open": True}
    }

def get_project_root():
    """Get the project root directory"""
    return Path(__file__).parent.absolute()

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP handler with better directory listing"""
    
    def __init__(self, *args, **kwargs):
        root = get_project_root()
        super().__init__(*args, directory=str(root), **kwargs)
    
    def end_headers(self):
        # Add CORS headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()
    
    def do_GET(self):
        """Handle GET requests"""
        # Default to index.html for root path
        if self.path == '/':
            self.path = '/index.html'
        return super().do_GET()

def print_banner(host, port):
    """Print startup banner"""
    print("=" * 50)
    print("  SereneWing Local Development Server")
    print("=" * 50)
    print()
    print(f"  Local:   http://{host}:{port}")
    print(f"  Network: http://{host}:{port}")
    print()
    print("  Press Ctrl+C to stop the server")
    print()
    print("=" * 50)

def open_browser(url):
    """Open browser in a non-blocking way"""
    try:
        webbrowser.open(url)
    except Exception as e:
        print(f"  Note: Could not auto-open browser: {e}")

def main():
    """Main function to start the server"""
    config = load_config()
    server_config = config.get("server", {})
    browse_config = config.get("browse", {})
    
    host = server_config.get("host", "localhost")
    port = server_config.get("port", 8000)
    auto_open = browse_config.get("auto_open", True)
    
    # Change to project directory
    project_root = get_project_root()
    os.chdir(project_root)
    
    # Create handler
    Handler = CustomHandler
    
    # Allow address reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer((host, port), Handler) as httpd:
            print_banner(host, port)
            
            # Auto-open browser
            if auto_open:
                url = f"http://{host}:{port}"
                open_browser(url)
            
            # Start server
            print(f"  Serving files from: {project_root}")
            print()
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n  Server stopped.")
        sys.exit(0)
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"\n  Error: Port {port} is already in use.")
            print(f"  Please change the port in config.json or stop the existing server.")
        else:
            print(f"\n  Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
