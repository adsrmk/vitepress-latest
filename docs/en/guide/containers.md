# Containerization

A website container is a **self-contained environment** that hosts your website along with all its associated resources. Think of it as a **“sandbox”**, where your site operates independently from other websites on the same server. Each container has its own dedicated storage, processes, and configuration settings, ensuring secure and efficient operation without affecting other sites.

We implement this through containerization using **LXC** (Linux Containers), managed with **LXD**, a powerful container hypervisor. LXC provides lightweight, fully isolated Linux environments that share the host kernel, allowing multiple websites to run securely and efficiently on a single server. LXD enhances this setup by providing a user-friendly interface, networking, storage management, backups, and migration features, (known as the cloud panel) making container management simple and scalable.


<img width="1200" height="1039" alt="image" src="https://github.com/user-attachments/assets/6450a16a-4f22-4641-a920-482dc0f45c97" />


Containers isolate resources such as:

- CPU and memory usage
- File storage
- Web server processes
- PHP and database instances

This isolation improves performance, security, and stability across all hosted websites.
