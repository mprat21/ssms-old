---
sidebar_position: 2
---
# Network Architecture

## Required Ports and blocked Ports

Depending on the location of your server with the management and the services nodes, you must adjust the firewall. In the table below, all the servers are in the same network. The individual SSMS nodes are connected via UDP ports 7600 until 7609 and the TCP ports 12001 until 12010. These two port ranges must be routed in both directions continuous the network (on firewalls, routers, etc.) During the cluster communication large UDP packets are also sent (> 40kB), which fragmented at the IP level. Routers must allow this.

|  Port 	|                 Description                	| External 	|    Internal 	|
|:-----:	|:------------------------------------------:	|:--------:	|:-----------:	|
| 80    	| User access to the web pages of the Portal 	| allow    	| allow       	|
| 443   	| App access to the SSMS via the SSL         	| allow    	| allow       	|
| 8009  	| AJP access                                 	| block    	| allow       	|
| 8443  	| Access to the management terminal / GUI    	| block    	| allow       	|
| 8445  	| External access to the services nodes      	| block    	| allow       	|
| 9000  	| Access to the configuration utility        	| block    	| allow       	|
| 7600  	| Cluster communication via UDP              	| block    	| allow       	|
| 12001 	| Node registration in the cluster via TCP   	| block    	| allow       	|