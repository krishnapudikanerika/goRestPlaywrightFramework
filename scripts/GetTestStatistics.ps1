$json =
Get-Content ".\reports\results.json" -Raw |
ConvertFrom-Json

$passed =
[int]$json.stats.expected

$failed =
[int]$json.stats.unexpected

$total =
$passed + $failed

$passPercentage = 0

if($total -gt 0){

    $passPercentage = [Math]::Round((($passed * 100.0) / $total),2)

}

Set-Content total.txt $total

Set-Content passed.txt $passed

Set-Content failed.txt $failed

Set-Content percentage.txt $passPercentage

Write-Host "================================"
Write-Host "Total Tests : $total"
Write-Host "Passed      : $passed"
Write-Host "Failed      : $failed"
Write-Host "Pass %      : $passPercentage"
Write-Host "================================"