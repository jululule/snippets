/* The base script */
var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://rawgit.com/Shuunen/snippets/master/bookmarklets/feedly-filter.js';
document.body.appendChild(script);

/* Unwanted trendy shit */
window.avoid = 'Star Wars, Dark Vador, Pokemon Go, Twerk, Game of Thrones, Dragon Ball, Justin Timberlake';

/* Unwanted sports */
window.avoid += ', UEFA, Euro 2016, footballeur, supporters de foot, jeux olympiques';

/* Unwanted games */
window.avoid += ', Overwatch, Hearthstone, Warhammer';

/* Unwanted softwares - Audio */
window.avoid += ', Foobar2000, DSpeech, Faasoft audio converter, zortam mp3, MP3 Skype Recorder, Atomix VirtualDJ';
window.avoid += ', gom audio, Pazera Audio Video, AudioGrail, Daum PotPlayer, Zulu DJ, Wave Editor';
window.avoid += ', Sound Forge Pro, VLC Media Player 3, Virtual DJ, MAGIX Sound Forge Pro, MediaMonkey Gold';
window.avoid += '';

/* Unwanted softwares - Video */
window.avoid += ', MKV Buddy, Dvd Ripper, Dvd video, OhSoft oCam, VSO ConvertXtoDVD, CloneDVD, iFun Video, DVDFab';
window.avoid += ', 4videosoft mxf, Wondershare Video Converter, Tipard Video, MKVToolNix';
window.avoid += ', 4K Converter, Tipard Blu, Adobe After Effects, XviD4PSP, AquaSoft SlideShow';
window.avoid += ', MXF Converter, GOM Media Player, Softwares PhotoToFilm, XRecode II';
window.avoid += ', oCam, Adobe Premiere Pro, CloneBD, Any Video Converter, XMedia Recode, Screen GIF v2016, Screen GIF 2016';
window.avoid += ', Media Player Classic, DVD Converter, TEncoder Video, Zoom Player, Magix Movie';
window.avoid += ', Movie Editor';
window.avoid += '';

/* Unwanted softwares - Photo */
window.avoid += ', PhotoInstrument, dxo optics pro, XnConvert, Process Lasso, STOIK Stitch Creator, Ashampoo Photo';
window.avoid += ', JixiPix Pastello, Photoshop Lightroom, Luxion KeyShot, PDF To Image, Photodex ProShow';
window.avoid += ', Aha soft articons, Home Photo Studio, IDPhotoStudio, DxO FilmPack, Icon Software Collection';
window.avoid += ', apowersoft screen capture, jixipix rip studio, Adobe Plugins, Any to icon, Aha Soft Icon';
window.avoid += ', CyberLink MakeupDirector, Blackmagic Design, ImageMagick, Corel PaintShop Pro';
window.avoid += ', QuarkXPress, Shotcut, Image Resizer, Digital Photo Suite, Photo SlideShow, PicPick';
window.avoid += ', Photo Pos Pro, Topaz Impression 2, Topaz Impression v2, Sad Cat Software, CollageIt';
window.avoid += ', Smith Micro Moho , Anime Studio, DxO ViewPoint 2, ScreenGif, ConverSeen, Picture Collage Maker';
window.avoid += ', Dynamic Auto Painter PRO 5, Dynamic Auto Painter PRO v5, ACDSee';
window.avoid += '';

/* Unwanted softwares - Browser */
window.avoid += ', Firefox, total commander, speedyfox, WinSCP, filezilla, AhaView, Polarity Browser, MultiCommander';
window.avoid += ', Alt Launch Band, Chromium 54, Chromium 55, Chromium 56, Chromium 57, Opera v39, Opera v40, Opera v41';
window.avoid += '';

/* Unwanted softwares - Optimizer */
window.avoid += ', Easy Pc Optimizer, Auslogics Disk Defrag, Geek Uninstaller, Ashampoo HDD Control, IObit Smart Defrag';
window.avoid += ', Glary Disk Cleaner, Glary Utilities Pro, Glarysoft Registry, Glary Tracks Eraser';
window.avoid += ', Supercopier, MiTeC System, Reg Organizer, windows repair pro, MPC Cleaner, MPC AdCleaner';
window.avoid += ', Auslogics Browser Care, Auslogics Duplicate, FileOptimizer, Revo Uninstaller, ReviverSoft Registry';
window.avoid += ', Total Uninstall Pro, Abelssoft GoogleClean, CCleaner 5, Wise Disk Cleaner';
window.avoid += ', Chrome Cleanup Tool, Uninstall Tool 3, Uninstall Tool 4, Windows Repair Toolbox';
window.avoid += ', wise care 365 pro v4, RegistryWizard, DLL Suite, DLL Care, Long Path Tool, Smart Driver Updater';
window.avoid += ', Destroy Windows, Solid State Doctor v3, WinUtilities, PGWare';
window.avoid += '';

/* Unwanted softwares - Editor */
window.avoid += ', FocusWriter, Computing editplus, Print2Cad, Emurasoft EmEditor, Blumentals Rapid, Blumentals HTMLPad';
window.avoid += ', WinPDFEditor, FreeCAD, EditPlus, Sublime Text 3, Sublime Text 2, SynWrite';
window.avoid += ', Poedit Pro 1, Poedit Pro v1, Sublime Text v3, Sublime Text v2';
window.avoid += '';

/* Unwanted softwares - Security */
window.avoid += ', OESIS Endpoint, Emsisoft Emergency Kit, PrivaZer, AntiVir Rescue System, ChromePass, Zero Assumption Recovery';
window.avoid += ', PDF Decrypter, Avast Clear, Pdf eraser pro, Product Key Finder, Wireless network watcher';
window.avoid += ', licensecrawler, GridinSoft Anti, Kaspersky Lab Products, McAfee Stinger';
window.avoid += ', Product Key Decryptor, Router Password Decryptor, skype ad remover, Kaspersky Virus Removal';
window.avoid += ', pdf password remover, dr web cureit, Soft4Boost Toolbar, 1Password, Network Password Recovery';
window.avoid += ', WireShark 2, Alternate File Shredder, WifiHistoryView, Chistilka 2';
window.avoid += ', Nexus Root Toolkit, NewFileTime, Malware Hunter, Network Scanner 6, RegRun, dot11Expert';
window.avoid += ', Zer0 0, UnHackMe v8, Angry IP Scanner';
window.avoid += '';

/* Unwanted softwares - Recovery */
window.avoid += ', Data Recovery, Photo Recovery, Video Recovery, Audio Recovery, RecoverBits';

/* Unwanted softwares - Backup */
window.avoid += ', CloneZilla, CloneApp, Personal Backup, BestSync, Backup and Recovery, SyncBackPro, Syncovery';
window.avoid += ', BurnAware';
window.avoid += '';

/* Unwanted softwares - TeamViewer */
window.avoid += ', TeamViewer premium, TeamViewer corporate, TeamViewer server, TeamViewer QuickJoin, Remote Desktop Manager';

/* Unwanted softwares - Downloaders */
window.avoid += ', FrostWire, Universal Windows Downloader, StreamWriter, file and image uploader, uTorrent Pro';
window.avoid += ', JDownloader 2, YouTube Downloader, Free Download Manager, USDownloader 1 3';
window.avoid += ', RetroShare 0, Download Accelerator Manager, torrent v3, torrent v4, JDownloader v2';
window.avoid += ', save2pc Ultimate';
window.avoid += '';

/* Unwanted softwares - eBook */
window.avoid += ', Anthemion Jutoh';
window.avoid += '';

/* Unwanted softwares - SEO */
window.avoid += ', Rank Tracker';
window.avoid += '';

/* Unwanted softwares - Office */
window.avoid += ', Microsoft Office, AVS Document Converter, OneDrive, PDF Annotator, PhraseExpress, FlipBuilder Flip PDF';
window.avoid += ', Directory Opus Pro, OpalCalc, WPS Office, Infix Pdf, Nitro Pro, Wondershare PDFelement';
window.avoid += ', Atlantis Word Processor, Cimaware OfficeFIX, SMath Studio, PaperScan Scanner';
window.avoid += ', Advanced Renamer, Efficient Notes 5, Efficient Notes 6, Efficient Notes 7, FastKeys';
window.avoid += ', Calendarscope, Efficient Password Manager, Balabolka, ScanPapyrus, Flip PDF Corporate';
window.avoid += ', OpenOffice v4, OpenOffice 4, Alternate Timer 3, Alternate Timer v3, Rapid Typing Tutor';
window.avoid += ', Alternate Splitter, TheSage, Simple Sticky Notes, Money Manager Ex, List and Print, PDF to';
window.avoid += ', ReNamer Pro, To PDF';
window.avoid += '';

/* Unwanted softwares - Mail clients */
window.avoid += ', Postbox';
window.avoid += '';

/* Unwanted softwares - System infos, managers */
window.avoid += ', wintools net, Task Manager Deluxe, HWiNFO, StressMyPC, Driver Talent Pro, AIDA64, HDD Guardian';
window.avoid += ', DiskTuna, EaseUS Partition, Winaero, ShareMouse, Kaspersky Get System Info';
window.avoid += ', GPU Caps Viewer, ShutDown Pro, Systimizer, Directory Monitor';
window.avoid += '';

/* Unwanted softwares - Others */
window.avoid += ', Xeoma, Vectric Aspire, Listen N Write';
window.avoid += ', FireAlpaca, energyXT, AnyToISO, VirtualBox 5';
window.avoid += ', PeaZip, RazorSQL';
window.avoid += ', AutoDWG, Edraw Max, EdrawSoft, Checksum Verifier';
window.avoid += ', jPortable';
window.avoid += ', Supremo';
window.avoid += ', Burning Studio, WinRAR, PdfGrabber';
window.avoid += ', nanDECK, Agelong Tree, Delcam PowerSHAPE';
window.avoid += ', MicroSIP, winreducer ex 100 v0 9';
window.avoid += ', Adobe AIR';
window.avoid += ', Stellarium';
window.avoid += ', Project Dogwaffle';
window.avoid += ', Articulate Storyline';
window.avoid += ', Ghostpress, Database NET, mIRC, Weather Pro';
window.avoid += ', BATExpert';
window.avoid += ', Dr Folder';
window.avoid += ', LeaderTask, RemoveIT Pro, Software Mix Collection';
window.avoid += ', DriverPack, Scanitto, SUMo Pro, GPU Shark, Duplicate Cleaner, PilotEdit, PDF Reducer';
window.avoid += ', VueScan, KCleaner, MailWasher, Password Cracker, Colors Pro, Master PDF, Yamicsoft Windows, Resizer Pro';
window.avoid += ', IIIUploader, VueMinder, Better JPEG, My Suite Pro, Stellar File, GrandVJ, fx Calc, Web Builder, WSUS Offline';
window.avoid += ', Update Monitor, CrystalDiskInfo, Soft Organizer, IsMyLcdOK, Email Password Recovery, PortExpert, Coolutils Total';
window.avoid += ', AdwCleaner, Cockos REAPER, RedCrab Calculator, OnlineTV, ABViewer, SMPlayer, BB FlashBack, Lucion FileConvert';
window.avoid += ', RAR Password, DivX Plus, Epubor Ultimate Converter, PDF Combine, Restore Point Creator, Farbar Recovery';
window.avoid += ', Crystal Security, SpyBot Search, Jixipix Software Pastello, Mytuning Utilities, Adobe Creative Cloud';
window.avoid += ', BatchPhoto, Axialis Icon, 4K YouTube to, 4K Video Down, GPU Z, mAirList, My Quick Launch, Imaging Pro';
window.avoid += ', Poster Designer, D Label Maker, Poster Printer, ProPoster, Folder Launcher, Thumbnails Maker, XYplorer';
window.avoid += ', Error Lookup, WifiInfoView, FontViewOK, Drive SnapShot, BitTorrent Pro, Bandicam, EMCO Malware, µTorrent Pro';
window.avoid += ', ePub Converter, NirLauncher, SoftOrbits Photo, SoftColor Automata, SSuite, Torrent Pro, True Launch Bar';
window.avoid += ', MailStyler, CDBurnerXP, SepPDF, WinNTSetup, Freemake Audio, Mem Reduct, JixiPix, Xara Designer, WinNc';
window.avoid += ', Beyond Compare, PeaExtractor, Multi Commander, Pixia, Newsletter Creator, Better File Rename, Far Manager';
window.avoid += ', Anti keylogger, HeavyLoad, RightNote, Gradekeeper, Efficient Address Book, Format Converter, Audio Converter';
window.avoid += ', Adobe After Effects, TIFF Converter, PDF Converter, USB Blocker, Any Uninstaller, JPEG Converter, VbsEdit';
window.avoid += ', DVDStyler, AnyMP4 Video, Slideshow Studio, USB Drive Stop, Repetier Host, SyMenu, SUMo 4, SUMo 5, SolveigMM Video';
window.avoid += ', MobileTrans, AntiBrowserSpy, EfficientPIM, Win Privacy, Windows Self Healing, Cent Browser, PDF Split';
window.avoid += ', Logo Creator, LibreCAD, GeoGebra, Product Key Explorer, Efficient Sticky Notes, TechSmith SnagIt, Opera 3, Opera 4';
window.avoid += ', WinTricks, DVD Cloner, Double Commander, Adobe Illustrator CC, AtomicCleaner3, AtomicCleaner, Atomic Cleaner';
window.avoid += ', Ebook Reader, Otter Browser, SoftOrbits Background Remover, SIV 5, Abelssoft WashAndGo, TeamViewer QuickSupport';
window.avoid += ', My Family Tree, Windows 10 Firewall, Window Inspector, HaoZip, OcenAudio, DUMo Pro, MoboMarket, TeamTalk';
window.avoid += ', Freemake Video, FL Studio';
window.avoid += '';

/* Unwanted celebrities */
window.avoid += ', Justin Bieber, Taylor Swift';
window.avoid += '';

/* Unwanted violence */
window.avoid += ', Daesh, Accident, brutalise, violente, violemment, mma fight, percute, se fait tuer, maltraites par';
window.avoid += '';

/* Unwanted deals */
window.avoid += ', batterie externe, xbox one, CDiscount, Certification, Smartphone 5, Chaussures Adidas, Zalando';
window.avoid += ', Console Sony PS4, Cable Lightning, Chaussures Reebok, Ghacks Deals, Enceinte bluetooth';
window.avoid += ', glace au choix, sur PS4, Console Nintendo, Ecouteurs intra auriculaires';
window.avoid += ', coffret blu ray, coffret dvd, sur Xbox 360, chaussures nike';
window.avoid += '';

/* to sort */
window.avoid += ', tototo';