´´´
cd /WinWithinFinal/IOS/WinWithin
sencha fs web -p 8000 start -map ./
´´´
http://localhost:8000/index.html


´´´
cd /WinWithinFinal/IOS/WinWithin/resources/sass
bundle install
bundle exec compass watch
´´´


´´´
cd /WinWithinFinal/IOS/WinWithin
sencha app build
´´´
eller
´´´
sencha app watch
´´´

http://druckit.wordpress.com/2013/08/12/sencha-touch-2-theming-apps-for-multiple-devices/