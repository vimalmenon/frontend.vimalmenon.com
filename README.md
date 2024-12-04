# vimalmenon.com
Frontend for vimalmenon.com

#### To Do
- [ ] Create a .dockerignore file
- [ ] Access K8S NodePort service in minikube
- [ ] Deploy app in Civo
- [ ] Have a code to copy to clipboard
- [ ] Show language used in code
- [ ] Grouping of commands
- [ ] Multiple commands
- [ ] Searching of commands
- [ ] Standardize the command

#### Issues
- [ ] Fix the issue with Eslint : Auto Sort and Grouping


#### Commands
Deploy app in k8s
```sh
helm install vimalmenon .
```
Remove app from K8s
```sh
helm uninstall vimalmenon
```
Check app status
```sh
helm status vimalmenon
```
Build docker file with latest version
```sh
docker build -t frontend.vimalmenon.com:latest .
```

