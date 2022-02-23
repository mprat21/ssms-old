---
sidebar_position: 1
---
# Installation

The following provides the complete installation process on Windows and Linux. In Linux, a user is created with the name "ssmsuser". The system starts the SSMS with this restricted user permissions for security reasons.  

## Permissions

Please carry out the installation with administrator rights on Windows and as root user on Linux.

## Windows based Installation

Start setup.exe by double clicking with the left mouse button or by running this command on terminal : setup.exe -i  console  

The possible options during the installation and general information about the installation program.

![Introduction](./files/installation_introduction.png)  

Click "Next" to continue or "Cancel" to terminate the process. In the further steps, click "Previous" to return to the previous step of the installation.  

### License Agreement  

Please accept the license agreement before installing the SSMS:  

![Licenceagreement](./files/installation_licenceagreement.png)  

### Selecting the Installation Path  

You can change the default installation paths described below:
* Windows:

          C:\ Program Files\KOBIL Systems\SSMS  


![chooseinstallfolder](./files/installation_chooseinstallfolder.png)  

### Creating the Shortcuts  

The following illustrates the options to create shortcuts on Windows.

![chooseshortcutfolder](./files/installation_chooseshortcutfolder.png)  

### Configuration  

At Windows it is possible to specify the user which is used to start the SSMS service.

**:warning: This user requires the permission "Log on as a service”.**

![configuration](./files/installation_configuration.png)  

The configuration utility requires a port to access its user interface. Default setting is port 9000.  

![configuration9000](./files/installation_configuration9000.png)  

### Creating password for the Configuration Utility  

The access to the Configuration Utility is only possible with a password. Please set the password for the Configuration Utility. The password must contain 4 to 20 characters. Initially, the plain text password is transferred to CU. Once CU has been started this password becomes encrypted and stored in the configuration file. This password prevents unauthorized access to the settings you have configured.  

![configurationpassword](./files/installation_configurationpassword.png)  

### Summary of the Settings  

 Before completing the installation, you receive a summary of the settings configured so far. You can confirm them by clicking on "Install":  

 ![pre-installationsummary](./files/installation_summary.png)  

### Completing the Installation  

In conclusion, you receive a summary of the installation process with information about the directory path where you can find the respective log file. Click on "Done" to end the installation program.  

  ![installationcompletion](./files/installation_completion.png)  

Once you have completed the installation, the program starts automatically the configuration utility with its web interface for the SSMS configuration.  

## Linux based Installation

Run the following command on terminal in Linux:

     ./setup.bin -i console  

You will be prompted to accept the instructions, terms and conditions etc. Simply accept those by pressing Enter.

  ![linux1](./files/linux1.PNG)

### License Agreement   

  ![linux2](./files/linux2.PNG)

  and so on.
  Simply accept it by typing 'Y'

  ![linux10](./files/linux10.PNG)


### Selecting the Installation Path  

  After this installation starts, please click Enter to accept the default settings prompted or enter your own values to change the installation.

  ![linux11](./files/linux11.PNG)


### Choose Link Location  

  ![linux12](./files/linux12.PNG)

### Configuration  

  ![linux13](./files/linux13.PNG)

### Creating password for the Configuration Utility  

  ![linux15](./files/linux15.PNG)

### Create Startup Scripts  

  ![linux16](./files/linux16.PNG)

### Summary of the Settings

  ![linux17](./files/linux17.PNG)

  ![linux18](./files/linux18.PNG)

### Completing the Installation

  Once all the steps are completed, you should now see that installation is successful.

  ![linux19](./files/linux19.PNG)
