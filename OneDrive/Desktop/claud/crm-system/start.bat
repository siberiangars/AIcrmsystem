@echo off
cd /d %~dp0
echo Starting CRM System...
npm run build
echo Starting production server...
start /b npx serve .next -l 3000
echo Server started at http://localhost:3000
pause
