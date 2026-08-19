# myserver

![Ubuntu Server](assets/ubuntu-server.png)
# Link: https://siwyit.pl/

This repository contains the configuration of my on-premise Ubuntu Server.

Current stack:

- Ubuntu Server
- Docker & Docker Compose
- Cloudflare
- Nginx
- React
- FastAPI (not yet initialized)

This homelab serves as my personal environment for learning Linux administration, networking, containerization, monitoring, and self-hosting. More services and infrastructure components will be added as the project evolves.

## Network Challenge – CGNAT

While deploying this project on my self-hosted Ubuntu Server, I discovered that my ISP uses **Carrier-Grade NAT (CGNAT)**. Although Nginx, Docker, DNS, UFW, and port forwarding were configured correctly, my server could not be reached from the public Internet.

Because incoming connections were blocked by CGNAT, I decided to use **Cloudflare Tunnel** instead of purchasing a public IPv4 address.

This solution provides secure HTTPS access to my self-hosted services without exposing my home network or requiring port forwarding.

![React](assets/reactjs.jpeg)
