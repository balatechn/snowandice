@echo off
echo ========================================
echo    SnowandIce Website - GitHub Setup
echo ========================================
echo.
echo This script will help you upload your redesigned website to GitHub
echo Repository: https://github.com/balatechn/snowandice
echo.

:: Check if git is installed
git --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Git is not installed or not in PATH
    echo Please install Git from: https://git-scm.com/download/windows
    echo.
    pause
    exit /b 1
)

echo Git is installed. Proceeding with setup...
echo.

:: Initialize git repository if not already done
if not exist ".git" (
    echo Initializing Git repository...
    git init
    echo.
)

:: Add all files to git
echo Adding files to Git...
git add .
echo.

:: Check if there are changes to commit
git diff --cached --quiet
if errorlevel 1 (
    echo Committing changes...
    git commit -m "Modern SnowandIce website with ice-blue gradients and professional styling"
    echo.
) else (
    echo No changes to commit.
    echo.
)

:: Set main branch
echo Setting main branch...
git branch -M main
echo.

:: Check if remote origin exists
git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Adding GitHub remote...
    git remote add origin https://github.com/balatechn/snowandice.git
    echo.
) else (
    echo GitHub remote already exists.
    echo.
)

echo ========================================
echo Ready to push to GitHub!
echo ========================================
echo.
echo Next steps:
echo 1. Make sure you've created the repository 'snowandice' on GitHub as user 'balatechn'
echo 2. Press any key to push your code to GitHub
echo 3. Enable GitHub Pages in repository settings
echo 4. Your website will be live at: https://balatechn.github.io/snowandice
echo.
echo Repository features:
echo - Modern ice-blue gradient design
echo - Compact navigation (14px font, reduced padding)
echo - Glass-morphism effects with backdrop blur
echo - Multi-layered gradients and enhanced shadows
echo - Smooth hover animations
echo - Professional business styling
echo - Mobile-responsive design
echo.
pause

echo Pushing to GitHub...
git push -u origin main

if errorlevel 1 (
    echo.
    echo ERROR: Failed to push to GitHub
    echo Please check:
    echo 1. Repository 'snowandice' exists on GitHub under 'balatechn'
    echo 2. You have push permissions to the repository
    echo 3. Your GitHub credentials are configured
    echo.
    echo You can also push manually using:
    echo git push -u origin main
    echo.
) else (
    echo.
    echo ========================================
    echo SUCCESS! Your website is now on GitHub
    echo ========================================
    echo.
    echo Repository: https://github.com/balatechn/snowandice
    echo.
    echo To enable GitHub Pages:
    echo 1. Go to your repository on GitHub
    echo 2. Click Settings tab
    echo 3. Scroll to Pages section
    echo 4. Select 'Deploy from a branch'
    echo 5. Choose 'main' branch and '/ (root)' folder
    echo 6. Click Save
    echo.
    echo Your website will be live at:
    echo https://balatechn.github.io/snowandice
    echo.
    echo Features included:
    echo - Ice-blue gradient theme throughout
    echo - Professional ice machine business styling
    echo - Modern responsive design
    echo - Interactive elements and animations
    echo.
)

echo.
pause