mkdir resized-shirts-64-samples
cd shirt-64-samples

for img in *.jpg
    do
        echo "Resizing" + ${img};
        ffmpeg -hwaccel cuda -i ${img} -vf scale=128:128 ../resized-shirts-64-samples/${img}
    done