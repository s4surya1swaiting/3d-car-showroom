#!/bin/bash
# AURA MOTORS 3D Showroom - Local Server Launcher

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8089

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║   AURA MOTORS — 3-Story 3D Car Showroom Launcher              ║"
echo "╚═══════════════════════════════════════════════════════════════╝"

# Check 3D models
echo "▶ Checking 3D asset integrity in models/..."
for model in buggy.glb classic_car.glb ferrari.glb groundvehicle.glb toycar.glb truck.glb; do
  if [ -f "$DIR/models/$model" ]; then
    echo "  ✓ models/$model ($(ls -lh "$DIR/models/$model" | awk '{print $5}'))"
  else
    echo "  ✗ Missing: models/$model"
  fi
done

# Check if port is already running
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "ℹ️ Showroom server is already running on http://localhost:$PORT"
else
    echo "▶ Starting WebGL HTTP server on port $PORT..."
    cd "$DIR" && python3 -m http.server $PORT &>/dev/null &
    sleep 1
    echo "✅ Showroom is live!"
fi

echo ""
echo "🚀 Open in your browser: http://localhost:$PORT"
echo "   Press Ctrl+C in terminal when finished."
