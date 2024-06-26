#!/bin/bash
cd
mkdir sample
cd sample
echo “Hi! This is just a sample text file created using a shell script.” > sample.txt
cat sample.txt
grep -o ‘t’ sample.txt | wc -l
chmod u+rwx sample.txt
echo -e “Hi! This is just another sample text added to the file.” >> sample.txt
chmod g-wx sample.txt
chmod a-rwx sample.txt
touch sample2.txt
cat sample.txt > sample2.txt
seq 1 1000 > sample2.txt
head -n 50 sample2.txt
tail -n 50 sample2.txt
touch prog1.txt prog2.txt program.txt code.txt info.txt
ls *prog*
alias name='ls *prog*'