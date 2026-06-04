@echo off
setlocal
cd /d "%~dp0"

set PORT=8877

for /f "usebackq delims=" %%I in (`powershell -NoProfile -ExecutionPolicy Bypass -Command "$ip = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '127.*' -and $_.InterfaceAlias -notlike 'vEthernet*' -and $_.InterfaceAlias -notlike '*tun*' } | Select-Object -First 1 -ExpandProperty IPAddress; if (-not $ip) { $ip = Get-NetIPAddress -AddressFamily IPv4 | Where-Object { $_.IPAddress -notlike '127.*' } | Select-Object -First 1 -ExpandProperty IPAddress }; $ip"`) do set LAN_IP=%%I
if "%LAN_IP%"=="" set LAN_IP=127.0.0.1

echo SHANHAI HUB quote service
echo.
echo Windows local address:
echo   http://127.0.0.1:%PORT%/index.html
echo.
echo Mac mini / LAN address:
echo   http://%LAN_IP%:%PORT%/index.html
echo.
echo Keep this window open while using the quote tool.
echo Press Ctrl+C to stop the service.
echo.

powershell -NoProfile -ExecutionPolicy Bypass -Command "if (Get-NetTCPConnection -LocalPort %PORT% -State Listen -ErrorAction SilentlyContinue) { exit 0 } else { exit 1 }" >nul 2>nul
if %errorlevel%==0 (
  echo The quote service already appears to be running on port %PORT%.
  echo Opening the local page now.
  start "" http://127.0.0.1:%PORT%/index.html
  echo.
  pause
  exit /b
)

where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:%PORT%/index.html
  py -m http.server %PORT% --bind 0.0.0.0
  exit /b
)

where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://127.0.0.1:%PORT%/index.html
  python -m http.server %PORT% --bind 0.0.0.0
  exit /b
)

echo Python is required to start the local preview server.
echo Install Python from https://www.python.org/downloads/windows/
pause
