<script setup>
import { ref, computed, onMounted } from 'vue';

let count = ref(0);

let vote = computed(() => {
  if (count.value > 1) {
    count.value = 1;
    return count.value;
  } 
  else if (count.value < 0) {
    count.value = 0;
    return count.value;
  } 
  else {
    return count.value;
  }
});

</script>


<template>
  <div class="header">
    <nav class="navbar">
      <div class="navbar_left">
        <a href="/" class="navbar_logo"><img src="https://viblo.asia/logo_full.svg" alt="Viblo" width="62" height="21"></a> 
        <ul class="navbar_menu">
          <li class="menu_item menu_item-active">
            <a href="/" class="link">Bài Viết</a>
          </li> 
          <li class="menu_item">
            <a href="/questions" class="link">
                <div class="">
                  Hỏi Đáp
                  <sup class="" style="display:none;"></sup>
                </div>
              </a>
          </li> 
          <li class="menu_item">
            <a href="/discussion" class="link">
              Thảo Luận
            </a>
          </li>
        </ul>
      </div> 
      <div class="navbar_right">
        <a href="/search" class="search_icon">
          <i aria-hidden="true" class="fa fa-search"></i>
        </a> 
        <div class="search_box">
          <input placeholder="Tìm kiếm trên Viblo" value=""> 
          <button class="btn btn-primary" style="">
            <i class="fa fa-search"></i>
          </button> 
        </div>
        <div class="navbar_icons">
          <div class="navbar_icon ">
            <button type="button" class="icon_button">
              <i class="fa fa-info"></i>
            </button>
          </div>
          <div class="navbar_icon margin-5rem">
            <span class="vietnam_flag" aria-haspopup="list"role="button">
              <img slot="prefix" src="https://viblo.asia/images/vi-flag-32x48.png" width="20" height="20" class="imageLocale"> 
              <span class="">vi</span>
            </span> 
          </div>
          <div class="navbar_icon">
            <span class="nabar_wrapper">
              <div class="">
                <i class="viblo-services-toggle fa fa-th" data-v-eb7ed3b6=""></i> 
                <sup>new</sup>
              </div>
            </span>
          </div>
          <div class="navbar_icon">
            <button type="button" class="icon_button navbar_signin">
              <i class="fa fa-sign-in"></i>
              <span>Đăng nhập/Đăng ký</span>
            </button>
          </div>

        </div> 



      </div>
    </nav>
  </div>

  <main>
    <div class="container">
      <div class="banner">
        <img src="https://images.viblo.asia/full/6e63fe2b-f602-4ac7-959f-353993b9fb81.png" width="1140" height="168" alt="" class="progressive-img_full">
      </div>
      <div class="content">
        <div class="left_sidebar d-flex flex-column align-items-center">
          <div class="vote">
            <button @click="count++" class="icon-btn upvote" ref="upvote">
              <i aria-hidden="true" class="fa fa-caret-up"></i>
            </button> 
            <div class="points text-muted">{{ vote }}</div> 
            <button @click="count--" class="icon-btn downvote" ref="downvote">
              <i aria-hidden="true" class="fa fa-caret-down"></i>
            </button>
          </div> 
          
          <div class="subscribe">
            <button type="button" class="">
              <i class="fa fa-bookmark"></i>
            </button>
          </div>

          <div class="a">
            <button type="button">
              <i class="fa fa-font"></i>
            </button>
          </div>

          <div class="social">
            <a tooltip-placement="right" rel="noopener" class="link link--muted" data-original-title="Chia sẻ liên kết đến trang này trên Facebook">
              <i aria-hidden="true" class="fa fa-facebook"></i>
            </a> 
            <a tooltip-placement="right" rel="noopener" class="link link--muted mg-0.5rem" data-tippy="" data-original-title="Chia sẻ liên kết đến trang này trên Twitter">
              <i aria-hidden="true" class="fa fa-twitter"></i>
            </a>
          </div>
        </div>

        <div class="main_content">
          <div class="heading">
            <div class="meta">
              <div class="meta_left">
                <div class="author">
                  <a href="/u/Thanh_Tung">
                    <img src="https://images.viblo.asia/avatar/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg" srcset="https://images.viblo.asia/avatar-retina/8853cc3b-e6a0-4bab-9c60-2932d829a639.jpg 2x" alt="Avatar"> 
                  </a>
                </div>
                <div class="author_info">
                  <div class="d-flex">
                    <div class="author_name mg-0.5rem">
                      <a href="/u/Thanh_Tung">Huỳnh Thanh Tùng</a> 
                      <span class="text-muted">@Thanh_Tung</span>
                    </div> 
                    <div class="author_subscribe mg-0.5rem">
                      <button type="button">
                        <span>Theo dõi</span>
                      </button>
                    </div>
                  </div> 
                  <div class="stats">
                    <span class="stats_item text-muted">
                      <i aria-hidden="true" class="stats_icon fa fa-star"></i>
                      {{ vote + 363 }}
                    </span>
                    <span class="stats_item text-muted">
                      <i aria-hidden="true" class="stats_icon fa fa-user-plus"></i>
                      8
                    </span>
                    <span class="stats_item text-muted">
                      <i aria-hidden="true" class="stats_icon fa fa-pencil"></i>
                      29
                    </span> 
                  </div>
                </div>
              </div>
              <div class="meta_right">
                <div title="Dec 23rd, 2019 1:22 p.m." class="text-muted">
                  Đã đăng vào thg 12 23, 2019 8:22 CH
                  <span title="4 phút đọc" class="text-muted"> - 4 phút đọc</span>
                </div> 
                <div class="d-flex align-items-center">
                  <div class="meta_nav_item mr-1 text-muted" data-tippy="" data-original-title="Lượt xem: 11197">
                    <i aria-hidden="true" class="meta_nav_icon"></i> 
                    <span>11.1K</span>
                  </div> 
                  <div class="meta_nav_item mr-1 text-muted" data-tippy="" data-original-title="Di chuyển đến bình luận">
                    <button type="button">
                      <i class="fa fa-comments-o meta_nav_icon"></i>
                      <span>0</span>
                    </button>
                  </div> 
                  <div class="meta_nav_item text-muted" data-tippy="" data-original-title="Xem danh sách người bookmark">
                    <button type="button">
                      <i class="fa fa-bookmark meta_nav_icon"></i>
                      <span>1</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h1>
              Những chú ý khi sử dụng v-model trong vue js
            </h1>
          </div>
          <div class="middle">
            <h3 id="mo_dau">Mở đầu</h3>
            <p>v-model là chức năng được sử dụng rất nhiều khi tạo form sử dụng Vue.js. Bạn có thể sử dụng v-model để tạo ra các ràng buộc dữ liệu hai chiều trên các ô input hoặc textarea hay thậm chí là file. Nó sẽ tự động chọn đúng cách để cập nhật các phần tử dựa trên kiểu nhập. Mặc dù khi sử dụng bạn sẽ thấy có đôi chút magic, nhưng v-model thực sự là một cú pháp không thể thiếu mỗi khi bạn muốn handle một form một cách thuận tiện và ngon lành 😄 Note: v-model sẽ bỏ qua các giá trị ban đầu, "checked" hoặc "selected" attribute được tìm thấy trên bất kì form elements nào. Nó sẽ luôn luôn xử lý các dữ liệu của Vue instance như là những dữ liệu luôn đúng. Bạn nên khai báo giá trị ban đầu ở phía Javascript bên trong các component.</p>
            <h3 id="hoat_dong_cua_v-model">Hoạt động của v-model</h3>
            <p>v-model là một syntax sugar (cú pháp ngọt - dễ nhìn) để viết v-on và v-bind với nhau trong một dòng. Tổng quan, hai dòng sau thực hiện cùng một hoạt động:</p>
            <div class="code">
              <pre>
                <code>
                  &lt;input v-model="searchText"&gt;
                  &lt;input :value="searchText" @change="searchText = $event.target.value"&gt;
                </code>
              </pre>
              <button title="Sao chép">
                <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                <span class="v-markdown-icon el-icon-document-copy"></span>
              </button>
            </div>
            <p>Thành phần tùy chỉnh của v-model Trường hợp sử dụng v-model đối với thành phần tùy chỉnh, mặc định thì props được gọi là value và sự kiện của input được sử dụng. Value này có thể thay đổi được bằng định nghĩa ở phía thành phần tùy chỉnh.</p>
            <p>Ví dụng sau được trích từ trang tài liệu tham khảo chính thức:</p>
            <div class="code">
              <pre>
                <code>
                  Vue.component('my-checkbox', {
                    model: {
                      prop: 'checked',
                      event: 'change'
                    },
                    props: {
                      // Tùy theo điều này,  cho phép sử dụng thuộc tính `value` với mục đích riêng biệt.
                      value: String,
                      // `checked` sẽ được sử dụng như thuộc tính thay thế `value`
                      checked: {
                        type: Number,
                        default: 0
                      }
                    },
                    // ...
                  })
                </code>
              </pre>
              <button title="Sao chép">
                <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                <span class="v-markdown-icon el-icon-document-copy"></span>
              </button>
            </div>
            <h3 id="_nhung-loi-thuong-gap-2">Những lỗi thường gặp</h3>
            <p>Viết cả v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a> V-model như đã nói ở trên là Event handling (xử lý sự kiện). Nên việc kết hợp viết hai lần sử dụng v-model và <a href="https://viblo.asia/u/change" target="_blank">@change</a> là không cần thiết, và làm cho code trở nên Not Syntax Suger. Ví dụ như đoạn mã ở dưới.</p>
            <p>// Đoạn code lỗi</p>
            <div class="code">
              <pre>
                <code class="language-none">
                  &lt;input v-model="searchText" @change="(value) =&gt; searchText = value"&gt;
                </code>
              </pre>
              <button title="Sao chép">
                <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                <span class="v-markdown-icon el-icon-document-copy"></span>
              </button>
            </div>
            <p>Do bản thân v-model đã có sẵn Event handling (xử lý sự kiện) của sự kiện <a href="https://viblo.asia/u/change" target="_blank">@change</a>, nên sự kiện đối với change bị lặp lại hai lần. Nếu trường hợp muốn xử lý nhiều sự kiện hơn một sự kiện change, chúng ta nên dùng việc sử dụng v-model và thay thế vào đó là sử dụng đồng thời v-bind và v-on hoặc sử dụng thuộc tính thay thế searchText.</p>
            <p>// Đoạn code chuẩn Syntax Suger</p>
            <div class="code">
              <pre>
                <code class="language-none">
                  &lt;input v-model=&quot;searchText&quot;&gt;
                  &lt;script&gt;
                  data(){
                    return {
                      innerSearchText: ''
                    }
                  },
                  computed: {
                    searchText: {
                      get () {
                        return this.innerSearchText
                      },
                      set (value) {
                        this.innerSearchText = value
                      }
                    }
                  }
                  &lt;/script&gt;
                </code>
              </pre>
              <button title="Sao chép">
                <span class="tooltiptext" style="display:none">Đã sao chép ✔️</span>
                <span class="v-markdown-icon el-icon-document-copy"></span>
              </button>
            </div>
          </div>
        </div>

        <div class="right_sidebar">
          <div class="sticky_sidebar" style="top: 80px; max-height: calc(-88px + 100vh); overflow-y: hidden;">
            <div class="index">
              <div class="title">
                <h4>MỤC LỤC</h4> 
                <hr class="filler_line">
              </div> 
              <ul class="index_list">
                <li class="index_item">
                  <a href="#_mo-dau-0" class="link active">Mở đầu</a>
                </li>
                <li class="index_item">
                  <a href="#_hoat-dong-cua-v-model-1" class="link">Hoạt động của v-model</a>
                </li>
                <li class="index_item">
                  <a href="#_nhung-loi-thuong-gap-2" class="link">Những lỗi thường gặp</a>
                </li>
                <li class="index_item">
                  <a href="#_tong-quan-3" class="link">Tổng quan</a>
                </li>
              </ul>
            </div>
          </div> 
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
a {
  color: #5488c7;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.header {
  background-color: #fff;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, .1);
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  width: 100%;
  height: 60px;
  top: 0;
  z-index: 1000;
  max-width: 1140px;
  margin: 0 auto;
}

.navbar_left {
  display: flex;
  align-items: center;
  color: #1b1b1b;
  flex-grow: 1;
}

.navbar_logo {
  margin-right: 4rem;
  color: #5488c7;
}

.navbar_logo img {
  vertical-align: middle;
  height: 1.5em;
}

.navbar_menu {
  display: flex;
  align-items: center;
  margin-bottom: 0;
}

.menu_item {
  margin-right: 2.5rem;
}

.menu_item a {
  font-weight: 700;
  color: #9b9b9b;
}

.menu_item a div {
  font-weight: 700;
  color: #9b9b9b;
}

.menu_item a:hover {
  color: #0b1a33;
}

.menu_item a div:hover {
  color: #0b1a33;
}

.menu_item-active {
  color: #0b1a33 !important;
}

.navbar_right {
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: flex-end;
}

.search_icon {
  display: none;
  color: #9b9b9b;
  margin-right: 1rem ;
}

.search_box {
  position: relative;
  flex: 1 1 auto;
}

.search_box input {
  outline: none;
  line-height: 1;
  width: 100%;
  padding: .65rem calc(45px + 1.5rem) .65rem 1.5rem;
  border-radius: 3px;
  border: 2px solid #d6d6d7;
}

.search_box button {
  top: 0;
  right: 0;
  height: 100%;
  position: absolute;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #fff;
  background-color: #3c74b8;
  border-color: #396eaf;
}

.navbar_icons {
  display: flex;
  align-items: center;
}

.navbar_icon {
  margin-left: 0.5rem;
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
}

.icon_button {
  padding: 0;
  font-size: 1.3em;
  outline: none;
  border: 1px solid #dcdfe6;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
}

.margin-5rem {
  margin-left: 1.5rem !important;
}

.vietnam_flag {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 0.5rem;
  padding: 5px 6px;
  border-radius: 5px;
  color: #9b9b9b;
  text-transform: uppercase;
  font-weight: 700;
  font-size: .875rem;
}

.vietnam_flag img {
  border-radius: 50%;
    height: 20px;
    width: 20px;
    vertical-align: middle;
}

.nabar_wrapper i{
  line-height: 30px;
  font-size: 1.3rem;
  color: #7f7f7f;
  display: inline-block;
  margin-left: .8rem;
  margin-right: .8rem;
  cursor: pointer;
  transition: all .1s ease-in;
}

.nabar_wrapper i:hover {
  color: #0b1a33;
}

.nabar_wrapper sup {
  position: absolute;
  transform: translateY(-50%) translateX(100%);
  right: 28px;
  top: 2px;
  font-size: 10px;
  height: 16px;
  line-height: 16px;
  padding: 0 4px;
  background-color: #f56c6c;
  border-radius: 10px;
  color: #fff;
  display: inline-block;
  text-align: center;
  white-space: nowrap;
  border: 1px solid #fff;
}

.navbar_signin {
  border-color: transparent;
  color: #5488c7;
  background: transparent;
  padding-left: 0;
  padding-right: 0;
  display: inline-block;
  line-height: 1;
  margin: 0;
  transition: .1s;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.container {
  flex: 1 0 auto;
  color: #1b1b1b;
}

.banner {
  background-color: #000000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 168px;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity .5s ease-out;
  object-fit: contain;
}

.content {
  display: flex;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 15px 1.5rem;
}

.left_sidebar {
  position: sticky;
  top: 0;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 50px;
}

.d-flex {
  display: flex;
}
.position-relative {
  position: relative;
}
.flex-column {
  flex-direction: column;
}
.justify-content-center {
  justify-content: center;
}

.align-items-center {
  align-items: center;
}

.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vote {
  font-size: 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon-btn {
  line-height: 1;
  color: #9b9b9b;
  outline: none;
  display: inline-block;
  padding: 0;
  border: 0;
  background: none;
  cursor: pointer;
  text-decoration: none;
  font-size: 35px;
}

.icon-btn:hover {
  color: #0b1a33;
}

.points {
  font-size: .6em;
  height: .6em;
  line-height: .6em;
  color: #9b9b9b;
  font-weight: 500;
  display: flex;
  align-items: center;
  cursor: default;
}

.text-muted {
  color: #9b9b9b !important;
}

.subscribe {
  margin-bottom: 1.5rem
}

.subscribe button {
  width: 40px;
  height: 40px;
  font-size: 18px;
  padding: 10px;
  color: #adb5bd;
  border: 2px solid #adb5bd;
  border-radius: 50%;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, .2);
}

.fa {
  display: inline-block;
  font: normal normal normal 14px / 1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
}

.a {
  margin-bottom: 1.5rem;
}

.a button {
  color: #adb5bd;
  border-radius: 50%;
  padding: 12px;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #dcdfe6;
  text-align: center;
  outline: none;
  margin: 0;
  transition: .1s;
  font-weight: 500;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
  margin-bottom: 1.5rem;
}

.social .link {
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 50%;
  border: 1px solid #dbe3e8;
}

.mg-0\.5rem {
  margin: 0.5rem;
}

.social .link:hover {
  fillter: brightness(1.2);
}

.link--muted {
  color: #9b9b9b !important;
}

.main_content {
  max-width: 760px;
  margin-left: 15px;
  margin-right: 15px;
  min-width: 700px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.heading {
  margin-bottom: .5rem;
}

.meta {
  margin-bottom: 4px;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.meta_left {
  display: flex;
  align-items: center;
}

.author {
  margin-right: .5rem;
  position: relative !important;
  align-items: center;
  justify-content: center;
  display: flex;
}

.author img {
  width: 45px;
  max-height: 45px;
  display: block;
  height: auto;
  margin: auto;
  cursor: pointer;
  border-radius: 50%;
}

.author_info {
  line-height: 24px;
  margin-right: 1rem;
}

.d-flex {
  display: flex
}

.author_name {
  align-self: center;
  justify-self: center;
}

.author_name a {
  margin-right: 5px;
  font-weight: 700;
}

.author_name span {

}

.author_subscribe button {
  padding: 5px 15px !important;
  font-size: 12px !important;
  border-radius: 3px !important;
  outline: none;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  text-align: center;
  box-sizing: border-box;
  margin: 0;
  transition: .1s;
  font-weight: 500;
}

.stats_item {
  max-height: 1.25rem;
  position: relative;
  margin-right: 10px;
}

.stats_icon {
  margin-right: 4px;
  aspect-ratio: unset !important
}

.meta_right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex: 1;
}

.meta_nav_item {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 20px;
} 

.mr-1 {
  margin-right: 1rem;
}

.meta_nav_icon {
  margin-right: .25rem;
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-feature-settings: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: initial;
  display: inline-block;
}

.meta_nav_item button {
  color: inherit;
  font-size: inherit;
  padding: 5px 6px;
  margin-right: .25rem;
  line-height: 1;
  white-space: nowrap;
  margin: 0;
  transition: .1s;
  font-weight: 500;
  border-radius: 4px;
  background-color: inherit;
  border: none;
} 

.meta h1 {
  text-align: left;
  line-height: 1.2;
  font-weight: 700;
  word-wrap: break-word;
  word-break: break-word;
  font-size: 2.5rem;
}

.middle {
  
}

.code {

}

.pre {

}

.index {

}

.title {

}

.index_list {

}

.index_item {

}

.filler_line {

}

.right_sidebar {

}

.sticky_sidebar {

}


</style>
