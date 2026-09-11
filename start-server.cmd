@echo off
REM Serves the NULLBYTE site over http://localhost:8099
REM Needed because Personal Hub (a Vite/ES-module app) cannot run from file://
cd /d "%~dp0"
echo.
echo   NULLBYTE  --  starting local server on http://localhost:8099
echo   Leave this window open. Press Ctrl+C to stop.
echo.
start "" http://localhost:8099/index.html
npx --yes http-server -p 8099 -c-1
