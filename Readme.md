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