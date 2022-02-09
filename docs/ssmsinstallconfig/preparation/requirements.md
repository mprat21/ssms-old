---
sidebar_position: 1
---
# Requirements

## Hardware Requirements
The hardware requirements represent minimum values and are only intended as a guide for starting the system. The actual use of the software requires considerably higher capacity and a modification of the hardware. You need to do some scaling and performance tuning, regarding that you will get proper guidance from “ KOBIL Professional Services” team.

- Intel Pentium Core 2 Duo 2.5 GHz
- 4 GByte RAM (or more for large data volumes)
- Additionally 4 GByte free hard disk space for the installation

**Note**: the storage requirements for the SSMS database strongly depends on the number of users and of devices added. If you activate the log levels "Debug" and "Trace", more data will be written in the log files, reducing the performance of the SSMS.

## Operating Systems

**Note**: that only 64 bit operating systems are supported. Other requirements for the operating system used are listed in the table below.

| Operating systems 	|                                  Version                                  	|
|:-----------------:	|:-------------------------------------------------------------------------:	|
| WINDOWS           	| Windows Server 2016 - 64 Bit<br/>  Windows Server 2019 - 64 Bit              	|
| LINUX             	| Redhat Enterprise Linux 7.9 - 64 Bit<br/> Redhat Enterprise Linux 8.3 - 64 Bit|

## Preliminary Considerations
### Directory Structure


Refer to the following directory structure:

<SSMS_INSTALL> refers to Installation directory with the other files and subdirectories whereas <SSMS_HOME> refers to Home directory of the installation, with the local settings and log files of the SSMS

**On Linux**

| **Directory name**|      **Path**       	|
|:-----------------:|:---------------------:|
| <SSMS_INSTALL>    |    /opt/KOBIL/        |
| <SSMS_HOME>       |   /opt/KOBIL/SSMS/    |


**On Windows**

| **Directory name**|      **Path**                           |
|:-----------------:|:-------------------------------------------:|
| <SSMS_INSTALL>    |   C:\Program Files\KOBIL Systems\SSMS       |
| <SSMS_HOME>       |   C:\Program Files\KOBIL Systems\SSMS\home  |


### Directory and File Permission for Linux
During the installation, a permission script is generated, which defines the directory permissions that the SSMS user requires to operate the SSMS when this is started as a Daemon.
The script is available in the following directory:

        /opt/KOBIL/<SSMS_INSTALL>/configutil/etc/permissions

It can be modified or deleted if other permissions are required. Please bear in mind that eventual problems related to changing the script are not supported by KOBIL.

## Database Requirements and Database Information
You will need to have installed a database management system (DBMS) to set up and adjust all the required SSMS components with the configuration utility. The SSMS currently supports the MSSQL, MySQL and Oracle Database systems. Set up a user for the corresponding DBMS with the required permissions. The system supports the UTF 8 character set. No additional character rules are needed. If you have already created a database for the SSMS, it will be automatically detected by the configuration utility. If a database administrator has created the SSMS database manually, the database must contain no tables and must be empty, otherwise the configuration utility returns the error message “This is not an SSMS database”.

### Support of database collations
SSMS requires some database columns to be case sensitive (like a user’s Id), while others are treated case insensitive (like the name of a role).

- **MYSQL**: SSMS applies the collation type 'utf8_general_ci' as default. That means per default all columns are case insensitive. Case sensitive columns are additionally bear the BINARY attribute.
- **MSSQL**: SSMS applies the collation type 'Latin1_General_CI_AS' as default. That means per default all columns are case insensitive. SSMS configures case sensitive columns to have the collation type 'SQL_Latin1_General_Cp1_CS_AS'. Please note that 'Latin1' aspect of the collation types does not interfere with supported Unicode character sets.
- **ORACLE**: By default ORACLE is case sensitive. The possibility to change this on a per column basis has been introduced with ORACLE 12.2. Because of compatibility to ORACLE 11 and to avoid performance issues on the database side all columns in SSMS are case sensitive. That means ORACLE provides the possibility to create for example two roles wit h the names 'Testrole' and 'testrole'. When changing data directly on database level, the use of large and lower case must comply to SSMS conventions.

### Options for Creating the SSMS Database
You have various options for creating the SSMS database:

- **Option A**: No database exists before the SSMS installation. This means that the complete SSMS database with all the tables for every module will be created with the configuration utility. In this case, you need administrator rights for the creation of the database. Note that this option does not work with the Oracle Database, so this database must always be created before the installation.
- **Option B**: The database already exists without tables and is empty. This means that you first create the database without table, which are then created by the configuration utility. The database may not contain external tables. In addition, you require database permissions to create and write tables for the already existing database.
- **Option C**: An SSMS database with tables already exists and it must be migrated.
In options A and B, the database permissions can be transferred by the configuration utility. The database administrator can thus use the configuration utility to create the complete SSMS database. After that, the database administrator gives the CU or the SSMS administrator the needed rights.
