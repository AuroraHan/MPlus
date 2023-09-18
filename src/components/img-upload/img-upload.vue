<template>
    <div>测试文件上传</div>
    <el-upload class="avatar-uploader" :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" :class="ns.b('preview')" />
        <el-icon v-else class="avatar-uploader-icon">
            <Plus />
        </el-icon>
    </el-upload>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Plus } from '@element-plus/icons-vue';
import { useNamespace } from "@/hooks/use-namespace";

const ns = useNamespace("img-upload");
const imageUrl = ref('')

//图片上传之前处理事件
function beforeAvatarUpload(file: any) {
    console.log(file);
    const isJpgPng =
        file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgPng) {
        // this.GLOBAL.messageEvent("error"，"上传头像图片只能是 JPG/PNG 格式!");
    } else {
        // this.compressImg(file.raw);
        console.log(file.size, 'szie')
        // imageUrl.value = URL.createObjectURL(file)
        compressImg(file)
    }
    return isJpgPng;
}

function compressImg(file: File) {
    let reader = new FileReader();
    // ?将读取到的文件编码成DataURL
    reader.readAsDataURL(file);

    //压缩图片
    reader.onload = function (ev) {
        console.log(ev, 'ev')
        try {
            // ?读取图片来获得上传图片的宽高
            let img = new Image();
            img.src = ev.target?.result as string;
            img.onload = function (ev) {
                // ?将图片绘制到canvas画布上进行压缩
                let canvas = document.createElement("canvas");
                let context = canvas.getContext("2d");
                let imgWidth = img.width;
                let imgHeight = img.height;
                // ?按比例缩放后图片宽高;
                let targetWidth = imgWidth;
                let targetHeight = imgHeight;
                // ?/如果原图宽大于最大高度
                if (targetWidth > targetHeight) {
                    // ?原图宽高比例
                    let scale = targetHeight / 1280;
                    targetHeight = 1280;
                    targetWidth = targetWidth / scale;
                } else {
                    // ?原图宽高比例
                    let scale = targetWidth / 1280;
                    targetWidth = 1280;
                    targetHeight = targetHeight / scale;
                }
                // ?缩放后高度仍然大于最大高度继续按比例缩小
                canvas.width = targetWidth; //canvas的宽=图片的宽
                canvas.height = targetHeight; //canvas的高=图片的高
                context?.clearRect(0, 0, canvas.width, canvas.height);
                context?.drawImage(img, 0, 0, canvas.width, canvas.height);
                let data = "";
                // ?如果图片小于0.6Mb，不进行压缩，并返回二进制流
                if (file.size <= 628288) {
                    data = canvas.toDataURL("image/jpeg");
                    imageUrl.value = data
                }
                // ?如果图片大于e.6Mb，进行压缩，并返回二进制流
                else {
                    // todo 压缩文件大小比例
                    data = canvas.toDataURL("image/jpeg", 0.4);
                    imageUrl.value = data
                }
            }
        } catch (error) {

        }
    }
}




</script>

<style scoped lang="scss">
$ns: img-upload;

@include block(#{$ns}-preview) {
    width: 400px;
    height: 400px;
}
</style>