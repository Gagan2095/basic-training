#!/bin/bash
#going to the home directory
cd
#creating a directory named sample
mkdir sample
#going to the directory sample
cd sample
# creating a file name sample.txt and adding some content into it.
echo “Hi! This is just a sample text file created using a shell script.” > sample.txt
#printing the content of the file.
cat sample.txt
#Counting the number of 't' character present in the sample.txt file.
grep -o ‘t’ sample.txt | wc -l
#granting all permission to the user
chmod u+rwx sample.txt
#Adding data to the sample.txt file.
echo -e “Hi! This is just another sample text added to the file.” >> sample.txt
#Removing write and execution permission from the group access.
chmod g-wx sample.txt
#Removing all the permission from all the three users (group,user,others).
chmod a-rwx sample.txt
#Creating a file named sample2.txt
touch sample2.txt
#Copying data from sample.txt file to sample2.txt
cat sample.txt > sample2.txt
#added 1000 lines of data which contains numbers from 1 to 1000
seq 1 1000 > sample2.txt
#printing first 50 line
head -n 50 sample2.txt
#printing last 50 line
tail -n 50 sample2.txt
#Creating 5 files at once 
touch prog1.txt prog2.txt program.txt code.txt info.txt
#Printing the name of files which contains prog in their names
ls *prog*
#Creating an alias for the ls *prog* command
alias name='ls *prog*'
