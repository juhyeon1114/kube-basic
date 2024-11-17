### 이미지 생성

1. 이미지 빌드

```shell
docker build -t kai1114/hello .
```

2. 컨테이너 실행

```shell
docker run -d -p 8100:8000 kai1114/hello
```

<br>

### DockerHub 업로드

1. 로그인

```shell
docker login
```

2. 이미지 업로드

```shell
docker push kai1114/hello
```

<br>

### k8s 대시보드 접속

1. 대시보드 실행

```shell
kubectl proxy
```

2. 계정 생성

```shell
kubectl apply -f adminuser.yaml
```

3. 권한 부여

```shell
kubectl apply -f adminuser-role.yaml
```

3. 토큰 발행

```shell
kubectl -n kubernetes-dashboard create token admin-user
```

4. 접속

http://localhost:8001/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login