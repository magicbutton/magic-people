<#---
title: Import Excel

---

#>

param (
    [string]$excelfilename = "/Users/nielsgregersjohansen/kitchens/magic-people/.koksmat/workdir/Global Mail List (04-2024).xlsx",
    [string]$sheetname = "Sheet1",
    [string]$namespace = "excel",
    [string]$tablename = "AllUsers", 
    [string]$flags = ""
)

if ($null -eq $env:WORKDIR ) {
    $env:WORKDIR = join-path $psscriptroot ".." ".koksmat" "workdir"
}
$workdir = $env:WORKDIR

if (-not (Test-Path $workdir)) {
    New-Item -Path $workdir -ItemType Directory | Out-Null
}

$workdir = Resolve-Path $workdir

write-host "Workdir: $workdir"

$exportdir = join-path $workdir "sqlimport"
if (-not (Test-Path $exportdir)) {
    New-Item -Path $exportdir -ItemType Directory | Out-Null
}

Push-Location
Set-Location $exportdir

try {
    magic-mix from excel to sql $excelfilename $sheetname $namespace $tablename
}
catch {
    Write-Host "Error: $_" -ForegroundColor Red
}
finally {
    Pop-Location
}

