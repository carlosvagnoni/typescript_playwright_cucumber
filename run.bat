@echo off

echo Running automated tests...
call npm run test

echo Opening report...
start "" "test-results\reports\cucumber_report.html"