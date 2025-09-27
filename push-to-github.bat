@echo off
echo ========================================
echo    Push SnowandIce to GitHub
echo ========================================
echo.
echo This will push your ice-blue gradient website to GitHub
echo Make sure you've created the repository 'snowandice' on GitHub first!
echo.
pause

echo Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Push failed!
    echo Please make sure:
    echo 1. Repository 'snowandice' exists on GitHub under 'balatechn'
    echo 2. You're logged into GitHub
    echo 3. You have push permissions
    echo.
) else (
    echo.
    echo ========================================
    echo SUCCESS! Website uploaded to GitHub!
    echo ========================================
    echo.
    echo Repository: https://github.com/balatechn/snowandice
    echo.
    echo Next: Enable GitHub Pages
    echo 1. Go to repository Settings
    echo 2. Scroll to Pages section  
    echo 3. Select 'Deploy from a branch'
    echo 4. Choose 'main' branch, '/ (root)' folder
    echo 5. Click Save
    echo.
    echo Your website will be live at:
    echo https://balatechn.github.io/snowandice
    echo.
    echo Features included:
    echo - Ice-blue gradient theme
    echo - Compact navigation (14px font)
    echo - Glass-morphism effects
    echo - Professional ice machine styling
    echo - Mobile-responsive design
    echo.
)
pause