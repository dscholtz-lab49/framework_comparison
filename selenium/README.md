#How to run tests:

`mvn test`

#How to create html report:

`mvn surefire-report:report-only`

To modify browser add `-Dbrowser.type=firefox` at the end of the command

`wdm.cachePath` needs to be modified to custom because on mac it cannot create the default folder