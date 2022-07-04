<template>
    <div class="catalog__header">
        <div class="catalog__header_left">Каталог</div>
        <div class="catalog__header_right">
            <nuxt-link :to="{name: 'index'}" class="catalog__header_btn hide_on_mobile">
                <div class="text">Лодки и катера</div>
                <div class="icon">
                    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6762 0.877641C22.2653 0.882415 22.739 1.36217 22.7342 1.94921L22.6561 11.5156C22.6513 12.1026 22.1699 12.5746 21.5808 12.5698C20.9917 12.5651 20.5181 12.0853 20.5229 11.4983L20.58 4.49805L9.25961 15.5971C8.83968 16.0088 8.16433 16.0034 7.75117 15.5849C7.33801 15.1664 7.3435 14.4934 7.76343 14.0817L19.0838 2.98262L12.0592 2.92569C11.4701 2.92092 10.9965 2.44116 11.0013 1.85412C11.0061 1.26708 11.4875 0.795066 12.0766 0.799841L21.6762 0.877641ZM4.00005 3.32938C3.41094 3.32938 2.93338 3.80528 2.93338 4.39234V20.0109C2.93338 20.598 3.41094 21.0739 4.00005 21.0739H20C20.5892 21.0739 21.0667 20.598 21.0667 20.0109V16.9249C21.0667 16.3379 21.5443 15.862 22.1334 15.862C22.7225 15.862 23.2 16.3379 23.2 16.9249V20.0109C23.2 21.7721 21.7674 23.1998 20 23.1998H4.00005C2.23274 23.1998 0.800049 21.7721 0.800049 20.0109V4.39234C0.800049 2.63117 2.23274 1.20346 4.00005 1.20346H7.18256C7.77167 1.20346 8.24923 1.67936 8.24923 2.26642C8.24923 2.85347 7.77167 3.32938 7.18256 3.32938H4.00005Z" fill="white"/>
                    </svg>
                </div>
            </nuxt-link>
            <nuxt-link :to="{name: 'index'}" class="catalog__header_link">
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 20 25" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.11116 17.2091L9.11117 0H10.963L10.963 17.2091L15.2749 12.8972C15.6365 12.5356 16.2228 12.5356 16.5844 12.8972C16.946 13.2588 16.946 13.845 16.5844 14.2066L10.6918 20.0992C10.3302 20.4608 9.74396 20.4608 9.38236 20.0992L3.48981 14.2066C3.12821 13.845 3.12821 13.2588 3.48981 12.8972C3.8514 12.5356 4.43767 12.5356 4.79926 12.8972L9.11116 17.2091ZM19.2964 24.0741C19.2964 24.5854 18.8818 25 18.3704 25H1.70376C1.19238 25 0.777832 24.5854 0.777832 24.0741C0.777832 23.5627 1.19238 23.1481 1.70376 23.1481H18.3704C18.8818 23.1481 19.2964 23.5627 19.2964 24.0741Z" fill="#FF0040"/>
                    </svg>
                </div>
                <div class="text">
                    Скачать каталог
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OsmCatalogTop'
}
</script>

<style lang="scss" scoped>
.catalog {
    &__header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: rem(30);
        @media all and (max-width: 1440px) {
            margin-bottom: 30px ;
        }
    }
    &__header_left {
        font-style: normal;
        font-weight: 600;
        font-size: rem(40);
        line-height: 110%;
        color: #172242;
        @media all and (max-width: 1440px) {
            font-size: 30px;
        }
    }
    &__header_right {
        display: flex;
        align-items: center;
    }
    &__header_btn {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: rem(20) rem(40);
        background: #FF0040;
        transition: all .3s ease;
        @media all and (max-width: 1440px) {
            padding: 20px 40px;
        }
        &:hover {
            background: #DF0043;
        }
        &:active {
            background: #A70032;
        }
        .text {
            font-style: normal;
            font-weight: 600;
            font-size: rem(20);
            line-height: 140%;
            color: #FFFFFF;
            @media all and (max-width: 1440px) {
                font-size: 20px;
            }
        }
        .icon {
            width: rem(22);
            height: rem(22);
            margin-left: rem(22);
            font-size: 0;
            @media all and (max-width: 1440px) {
                width: 28px;
                height: 28px;
                margin-left: 20px;
            }
        }
    }
    &__header_link {
        display: flex;
        align-items: center;
        text-decoration: none;
        margin-left: rem(42);
        @media all and (max-width: 1440px) {
            margin-left: 40px;
        }
        .text {
            font-style: normal;
            font-weight: 400;
            font-size: rem(16);
            line-height: 140%;
            color: #FF0040;
            @media all and (max-width: 1440px) {
                font-size: 16px;
            }
        }
        .icon {
            width: rem(18);
            margin-right: rem(13);
            font-size: 0;
            @media all and (max-width: 1440px) {
                width: 25px;
                margin-right: 10px;
            }
        }
    }
}
</style>