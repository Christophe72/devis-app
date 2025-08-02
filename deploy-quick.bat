@echo off
echo =====================================================
echo      DEPLOIEMENT RAPIDE SUR GITHUB - DEVIS APP
echo =====================================================
echo.

REM Script de déploiement rapide sans questions
REM Utilise un message de commit automatique avec la date/heure

if not exist ".git" (
    echo [ERREUR] Ce dossier n'est pas un dépôt Git !
    pause
    exit /b 1
)

REM Message de commit automatique
set "commit_msg=Auto-deploy: %date% %time%"

echo [INFO] Déploiement rapide en cours...
echo [INFO] Message: %commit_msg%
echo.

REM Ajout, commit et push en une seule fois
git add . && git commit -m "%commit_msg%" && git push
if errorlevel 1 (
    echo [ERREUR] Échec du déploiement !
    pause
    exit /b 1
)

echo.
echo [OK] ✅ Déploiement rapide terminé avec succès !
echo.
timeout /t 3 > nul
exit /b 0
