<template>
    <footer class="footer">
        <div class="footer__bottom">
            <div class="footer__bottom_left">ООО “Винета”, 2012-2022</div>
            <div class="footer__bottom_right">
                <ul>
                    <li><a href="#">Политика конфидециальности</a></li>
                    <li><a href="#">Пользовательское соглашение</a></li>
                    <li><a href="#">Карта сайта</a></li>
                </ul>
            </div>
        </div>
    </footer>   
</template>

<style lang="scss" scoped>
.footer {
    &__bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #172242;
        padding: vw(20) vw(50);
        transition: 1s bottom 0.5s ease;
    }
    &__bottom_left {
        font-style: normal;
        font-weight: 600;
        font-size: vw(20);
        line-height: 140%;
        color: #FFFFFF;
    }
    &__bottom_right {
        
        ul {
            display: flex;
            align-items: center;
            margin: 0;
            padding: 0;
            list-style: none;
            li {
                &:not(:last-child) {
                    margin-right: vw(40);
                }
            }
            a {
                font-style: normal;
                font-weight: 600;
                font-size: vw(16);
                line-height: 140%;
                color: #FFFFFF;
                text-decoration: none;
            }
        }
    }
}
</style>