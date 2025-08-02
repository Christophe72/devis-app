@echo off
echo =====================================================
echo          DEPLOIEMENT SUR GITHUB - DEVIS APP
echo =====================================================
echo.

REM Vérifier si nous sommes dans un dépôt Git
if not exist ".git" (
    echo [ERREUR] Ce dossier n'est pas un dépôt Git !
    echo Veuillez d'abord initialiser Git avec : git init
    pause
    exit /b 1
)

REM Vérifier le statut Git
echo [INFO] Vérification du statut Git...
git status --porcelain > nul 2>&1
if errorlevel 1 (
    echo [ERREUR] Impossible de vérifier le statut Git !
    pause
    exit /b 1
)

REM Afficher les fichiers modifiés
echo.
echo [INFO] Fichiers modifiés :
git status --short

REM Demander confirmation
echo.
set /p "confirm=Voulez-vous continuer le déploiement ? (o/n): "
if /i not "%confirm%"=="o" (
    echo [INFO] Déploiement annulé.
    pause
    exit /b 0
)

REM Demander le message de commit
echo.
set /p "commit_msg=Entrez le message de commit (ou appuyez sur Entrée pour un message par défaut): "
if "%commit_msg%"=="" (
    set "commit_msg=Mise à jour automatique - %date% %time%"
)

echo.
echo =====================================================
echo           DEBUT DU DEPLOIEMENT
echo =====================================================

REM Étape 1: Ajouter tous les fichiers
echo [ETAPE 1/4] Ajout des fichiers...
git add .
if errorlevel 1 (
    echo [ERREUR] Impossible d'ajouter les fichiers !
    pause
    exit /b 1
)
echo [OK] Fichiers ajoutés avec succès.

REM Étape 2: Créer le commit
echo [ETAPE 2/4] Création du commit...
git commit -m "%commit_msg%"
if errorlevel 1 (
    echo [ATTENTION] Aucun changement à commiter ou erreur de commit.
    echo Vérifiez s'il y a des modifications à envoyer.
    pause
    exit /b 1
)
echo [OK] Commit créé avec succès.

REM Étape 3: Vérifier la branche actuelle
echo [ETAPE 3/4] Vérification de la branche...
for /f "tokens=*" %%i in ('git branch --show-current') do set current_branch=%%i
echo [INFO] Branche actuelle : %current_branch%

REM Étape 4: Push vers GitHub
echo [ETAPE 4/4] Envoi vers GitHub...
git push origin %current_branch%
if errorlevel 1 (
    echo [ERREUR] Impossible d'envoyer vers GitHub !
    echo Vérifiez votre connexion internet et vos droits d'accès.
    echo.
    echo Solutions possibles :
    echo - Vérifiez que l'origine remote est configurée : git remote -v
    echo - Vérifiez vos identifiants GitHub
    echo - Configurez un token d'accès personnel si nécessaire
    pause
    exit /b 1
)

echo.
echo =====================================================
echo          DEPLOIEMENT TERMINE AVEC SUCCES !
echo =====================================================
echo [OK] Vos modifications ont été envoyées sur GitHub.
echo [INFO] Branche : %current_branch%
echo [INFO] Message : %commit_msg%
echo.
echo Vous pouvez maintenant consulter vos modifications sur :
echo https://github.com/VOTRE_USERNAME/VOTRE_REPO
echo.

REM Optionnel : Ouvrir le navigateur sur le dépôt GitHub
set /p "open_browser=Ouvrir le dépôt GitHub dans le navigateur ? (o/n): "
if /i "%open_browser%"=="o" (
    REM Récupérer l'URL du dépôt distant
    for /f "tokens=2" %%i in ('git remote get-url origin 2^>nul') do set repo_url=%%i
    if defined repo_url (
        REM Convertir l'URL SSH en URL HTTPS si nécessaire
        echo %repo_url% | findstr "git@" > nul
        if not errorlevel 1 (
            REM Conversion SSH vers HTTPS
            set "repo_url=%repo_url:git@github.com:=https://github.com/%"
            set "repo_url=%repo_url:.git=%"
        )
        start "" "%repo_url%"
    ) else (
        echo [ATTENTION] Impossible de récupérer l'URL du dépôt.
    )
)

echo.
echo Appuyez sur une touche pour fermer...
pause > nul
exit /b 0
