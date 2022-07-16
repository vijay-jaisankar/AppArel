mkdir resized-pants-128-samples
cd pants-128-samples

for img in *.jpg
    do
        echo "Resizing" + ${img};
        ffmpeg -hwaccel cuda -i ${img} -vf scale=128:128 -preset slow ../resized-pants-128-samples/${img}
    done