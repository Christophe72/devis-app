@echo off
echo =====================================================
echo       INITIALISATION DU DEPOT GITHUB
echo =====================================================
echo.

REM Script pour initialiser un nouveau dépôt GitHub
REM À utiliser la première fois seulement

echo [INFO] Ce script va initialiser votre dépôt GitHub.
echo [ATTENTION] Utilisez ce script seulement la première fois !
echo.

set /p "repo_url=Entrez l'URL de votre dépôt GitHub (ex: https://github.com/username/repo.git): "
if "%repo_url%"=="" (
    echo [ERREUR] URL du dépôt requise !
    pause
    exit /b 1
)

echo.
echo [ETAPE 1/5] Initialisation du dépôt Git local...
git init
if errorlevel 1 (
    echo [ERREUR] Impossible d'initialiser Git !
    pause
    exit /b 1
)

echo [ETAPE 2/5] Ajout de tous les fichiers...
git add .

echo [ETAPE 3/5] Premier commit...
git commit -m "Initial commit - Devis App with SQLite"

echo [ETAPE 4/5] Ajout de l'origine remote...
git remote add origin %repo_url%

echo [ETAPE 5/5] Premier push vers GitHub...
git branch -M main
git push -u origin main

if errorlevel 1 (
    echo [ERREUR] Impossible d'envoyer vers GitHub !
    echo Vérifiez que le dépôt existe et que vous avez les droits d'accès.
    pause
    exit /b 1
)

echo.
echo =====================================================
echo        DEPOT GITHUB INITIALISE AVEC SUCCES !
echo =====================================================
echo [OK] Votre projet est maintenant sur GitHub : %repo_url%
echo.
echo Vous pouvez maintenant utiliser deploy.bat pour les futurs déploiements.
echo.
pause
exit /b 0
