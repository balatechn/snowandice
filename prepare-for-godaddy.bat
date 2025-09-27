@echo off
echo ========================================
echo    SnowandIce Website - GoDaddy Upload
echo ========================================
echo.
echo This script will help you prepare files for GoDaddy hosting
echo.

:: Create upload folder
if not exist "upload" mkdir upload

:: Copy main files
echo Copying main website files...
copy "index.html" "upload\index.html" >nul
copy "styles.css" "upload\styles.css" >nul
copy "script.js" "upload\script.js" >nul

:: Copy images if they exist
echo Copying image files...
if exist "header-banner.png" copy "header-banner.png" "upload\header-banner.png" >nul
if exist "Ice-Cube-Maker.png" copy "Ice-Cube-Maker.png" "upload\Ice-Cube-Maker.png" >nul
if exist "Undercounter-Ice-Maker.png" copy "Undercounter-Ice-Maker.png" "upload\Undercounter-Ice-Maker.png" >nul
if exist "Ice-Storage-Bin.png" copy "Ice-Storage-Bin.png" "upload\Ice-Storage-Bin.png" >nul
if exist "Ice-cubes.jpg" copy "Ice-cubes.jpg" "upload\Ice-cubes.jpg" >nul

:: Copy documentation
copy "DEPLOYMENT-GUIDE.md" "upload\DEPLOYMENT-GUIDE.md" >nul

echo.
echo ========================================
echo Files prepared for upload in 'upload' folder:
echo ========================================
dir upload /b
echo.
echo Next steps:
echo 1. Log into your GoDaddy hosting account
echo 2. Open File Manager
echo 3. Navigate to public_html folder
echo 4. Upload all files from the 'upload' folder
echo 5. Set file permissions to 644
echo 6. Test your website
echo.
echo Your redesigned SnowandIce website is ready!
echo ========================================
pause