# ionCube Loader

ionCube is a technology for securing PHP code, allowing developers to protect their software from viewing and piracy by encoding source code into unreadable bytecode, 
which is then executed by a special ionCube Loader (a PHP extension) on the server, also providing features for licensing and distribution. 
It works by compiling PHP scripts into a protected, binary format, making it hard to reverse-engineer, and the loader extension decrypts and runs it at runtime, 
often used by developers to sell licensed applications without revealing their core logic. 

<br>

**Potential benefits**

- Security: Encryption prevents hackers from injecting malware or backdoors into core files without breaking the script.
- Reliability: Locked files ensure you are running the exact code the developer intended, eliminating bugs caused by accidental edits.
- Performance: By using optimized bytecode, the execution is fast and has virtually zero impact on your site’s speed.


## Enable encoder

Users may enable the ionCube Loader within the developer tools panel. **Please be advised that PHP 8.0 is not supported** for ionCube integration as it was utilized as a transitional upgrade. It is however supported for PHP 8.1+ and all subsequent versions.
<br>
<img width="846" height="178" alt="image" src="https://github.com/user-attachments/assets/c471b1a7-4ab0-49b4-a373-71531b5e3f44" />

