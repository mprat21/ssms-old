---
sidebar_position: 1
---
# Helm Chart Installation  

Installation steps :  

1. Login to OpenShift:  
       oc login api.ocptest.ist.sn:6443 -u kubeadmin -p …  

1. Create a new project(namespace) for mPower:  
       oc new-project mpower --display-name="Kobil mPower" --description=" Kobil mPower Eco System"  

1. Create service account for mpower-ssms charts to use required privileged.  
       oc create serviceaccount mpower-ssms-sa  

1. Add anyuid and privileged scc's to default and mpower-ssms service accounts  
       oc adm policy add-scc-to-user anyuid -z mpower-ssms-sa  
       oc adm policy add-scc-to-user privileged -z mpower-ssms-sa  

1. Create a docker registry secret(mpower-registry-pull) to pull images from Kobil Docker Hub  
       oc create secret docker-registry mpower-registry-pull --docker-server=https://index.docker.io/v1/ --docker-username=... --docker-password=...  

1. Add Kobil chart repo to download Kobil helm charts  
       helm repo add kobil https://charts.kobil.com --username ... --password ...  

       helm repo update  

       helm search repo kobil  

       helm pull kobil/mpower  

1. Install mPower  
  1. Install helm chart with the customized values.yaml file. So, edit your previously created image pull secret, disable all other entries and enter the admin user and password for the SSMS server.  
  1. Consider storage-class which is used by OpenShift cluster and edit if needed.  
  1. Consider namespace  
  1. Set the DB username and password to allow access for the SSMS server to the DB.  
  1. Disable all the other components that are not required for running only the SSMS server.  


global:

    createRegistryPullSecret: false

imagePullSecrets:

    - registry-secret

tracing:

    enabled: false

logging:

    level: INFO

  ingress:

    enabled: false

    class: nginx

    domain: mpower.local

scp:

    enabled: false

tis:

    enabled: false

ldapc:

    enabled: false

idp:

    enabled: false

dashboard:

    enabled: false

opencensus:

    enabled: false  

## Uninstallation  

In order to uninstall the SSMS server from your OpenShift you can run the following command.

        helm uninstall <helm release name> -n <namespace>  

        helm uninstall mpower -n mpower
