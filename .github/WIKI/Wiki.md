[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fcodestates-beb%2FBEB-06-FIRST-03&count_bg=%232372CC&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=VISIT&edge_flat=false)](https://github.com/codestates-beb/BEB-06-FIRST-03)</br>

### π&nbsp;introduce
&nbsp;&nbsp;&nbsp; μ½λμ€νμ΄μΈ  BEB 6κΈ° 3μ‘°μλλ€!<br/>
&nbsp;&nbsp; μ§λ 4κ°μμ¬κ° μ°λ¦¬κ° λ°°μμ¨ μ§μλ€κ³Ό μ€μ  μλΉμ€μ€μΈ **OpenSea**λ₯Ό λΆμνμ¬<br/>
&nbsp;&nbsp; NFTλ₯Ό λ°ννκ³  μλ‘ μ£Όκ³  λ°μ μ μλ μΉ μ΄νλ¦¬μΌμ΄μμ κ΅¬ννκ³ μ ν©λλ€.<br/>
&nbsp;&nbsp; μ€λ§νΈ μ»¨νΈλνΈλ₯Ό λΈλ‘μ²΄μΈ λ€νΈμν¬μ λ°°ν¬νκ³  <br/>
&nbsp;&nbsp; web3 λΌμ΄λΈλ¬λ¦¬μ μ°λνμ¬ μλ²λ₯Ό κ΅¬μΆνκ³  <br/>
&nbsp;&nbsp; μ°λ¦¬κ° λ§λ€μ΄λΈ μλ²λ‘μ ν΅μ νλ μΉ νμ΄μ§λ₯Ό κ΅¬ννλ κ²μ<br/>
&nbsp;&nbsp; νμ λͺ¨λμκ² μμ΄μ μ²«λ²μ§Έ λμ μλλ€.<br/>
&nbsp;&nbsp; μ΄λ² νλ‘μ νΈλ₯Ό ν΅ν΄ λΈλ‘μ²΄μΈμ λ€λ£¨λ κ°λ°μλ‘μ νλ°μ λ΄λμ΄<br/>
&nbsp;&nbsp; μ ν¬μ μ₯λμ κ°λ₯μ±μ μ΄μ΄λ³Ό(**OpenSee**) κ²μλλ€.
<br/>

<br/>

### π&nbsp;Roles
||||
|---|---|---|
**μ΄λ―Όμ±** | νλ‘ νΈμλ(νμ₯) | https://github.com/yiminwook 
**μ‘°μμ** |νλ‘ νΈμλ |https://github.com/noncontact
**νμμ§** |λ°±μλ&μ€λ§νΈμ»¨νΈλνΈ | https://github.com/eunjh3

<br/>

### π&nbsp;Rules
&nbsp;&nbsp; νμλ μ€μ  11μμ μ§ν<br/>
&nbsp;&nbsp; μ»€λ°μ νκΈλ‘ κ°κ²°νκ² μμ±νκ³ , κΈ°λ₯κ΅¬νμλ§λ€ μμ±<br/>
&nbsp;&nbsp; κ³ λ―Όμ΄ λ λλ ν­μ νμλ€κ³Ό μλ΄!
<br/>
<br/>


### β»οΈ&nbsp;Workflow
<p align="center">
  <img src='./workFlow.png' alt="workFlow_png" width="800" />
</p>
<br />
<br/>
 
### π &nbsp;Workframe
<p align="center">
  <img src='./workFrame.png' alt="workFrame_png" width="800" />
</p>
<br />
<br/>

### βοΈ&nbsp;Configuration
<p align="center">
  <img src='./configuration.png' alt="configuration_png" width="800" />
</p>
<br />
<br/>

### π&nbsp;Achieve goals

- Bare Minimum
  - Client
    - μ‘°ν νμ΄μ§(Search κΈ°λ₯)
    - NFT νν°λ§ κΈ°λ₯
    - κ±°λ νμ΄μ§(tranferFrom κΈ°λ₯)
    - λ―Όν νμ΄μ§(Mint κΈ°λ₯)
    - emptyPage
  - Server
    - μ»¨νΈλνΈμ ownerOf() μ€ν
    - μ¬λ°λ₯΄μ§ μμ κ²½λ‘λ‘ μ κ·Όμ err send
- Recommended
  - ν΄λΌμ΄μΈνΈμ μΉ μ§κ°(λ©νλ§μ€ν¬)μ μ°κ²°νμ¬ address λ°μμ€κΈ°
  - μ¬μ©μ(address)κ° κ°μ§κ³  μλ λͺ¨λ  NFT μ λ³΄(tokenId, tokenURI) λ°μμ€κΈ°
  - νμλ€μ κΉνλΈ μ λ³΄λ₯Ό Footerμ μ λ¦¬
- Advanced
  - μ΅μ  NFT λ­νΉμ λ³΄ λ°μμ€κΈ°
  - μΈλΆ NFT κ²μκΈ°λ₯
  - NFT Burn(μ­μ ) κΈ°λ₯
  - ν΄λΌμ΄μΈνΈ μλ² κ° HTTPS ν΅μ 

<br/>
<br/>


### π&nbsp;Server API Docs.
|function|method|input|output
|---|---|---|---|
owner(TokenId) | GET | query(?tokenId="") |data{ ownerAddress }|
Search(address) | GET | query(?address="") |data{ tokenId, tokenURI }|
Search(TokenId) | GET | query(?tokenId="") |data{ tokenURI }|

<br/>
 

---
> ### π¦&nbsp;Version 
---
<pre >
<img src="https://img.shields.io/badge/React ^18.2.0-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <br/>
<img src="https://img.shields.io/badge/React_Router ^18.2.0-CA4245?style=for-the-badge&logo=React Router&logoColor=white"><br/>
<img src="https://img.shields.io/badge/React_Router_dom ^6.4.0-CA4245?style=for-the-badge&logo=React Router&logoColor=white"><br/>
<img src="https://img.shields.io/badge/ipfs_http_client 57.0.1-65C2CB?style=for-the-badge&logo=IPFS&logoColor=white"><br/>
<img src="https://img.shields.io/badge/Bootstrap^5.2.2-7952B3?style=for-the-badge&logo=IPFS&logoColor=white"><br/>
<img src="https://img.shields.io/badge/Express ^4.18.2-000000?style=for-the-badge&logo=Express&logoColor=white"><br/>
<img src="https://img.shields.io/badge/axios ^1.1.3-5A29E4?style=for-the-badge&logo=axios&logoColor=white"><br/>
<img src="https://img.shields.io/badge/Web3.js ^1.8.0-F16822?style=for-the-badge&logo=Web3.js&logoColor=white"><br/>
</pre>