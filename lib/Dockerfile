FROM quay.io/maherzubair/sigma-md:beta
RUN git clone https://github.com/GEEKMDXINC/SLG-MD /root/GEEKMDXINC/SLG-MD
WORKDIR /root/GEEKMDXINC/SLG-MD/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
 
 