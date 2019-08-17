# Kill the script if there is a cmdlet error, defaults to "Continue"
$ErrorActionPreference = "Stop"

$zip = "publish.zip"
$distFolder = "dist"
If (Test-Path $zip){ Remove-Item $zip }

#Delete dist folder
If (Test-Path $distFolder ){ Remove-Item $distFolder -Recurse }

New-Item -Path $distFolder -ItemType "directory"

#Copy files into dist file
Copy-Item -Path index.html -Destination $distFolder
Copy-Item -Path web.config -Destination $distFolder
Copy-Item -Path resources -Destination $distFolder -Recurse
Copy-Item -Path controller -Destination $distFolder -Recurse


#Create Zip
Compress-Archive -Path dist\* -DestinationPath $zip

$username = "esaith"
$password = "dev4days88!" 
$apiUrl = "https://douseskinessentials.scm.azurewebsites.net/api/zipdeploy"
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $username, $password)))
$userAgent = "powershell/4.0"
Invoke-RestMethod -Uri $apiUrl -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -UserAgent $userAgent -Method POST -InFile $zip -ContentType "multipart/form-data"
Write-Host "Publish complete"

If (Test-Path $zip){ Remove-Item $zip }

#Delete dist folder
If (Test-Path $distFolder ){ Remove-Item $distFolder -Recurse }