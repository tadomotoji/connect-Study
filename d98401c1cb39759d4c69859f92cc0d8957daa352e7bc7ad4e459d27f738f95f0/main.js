//Take properties
const takePropertiesIketei = () => {
    return {
        "category_ids": (() => {
            let relativeWords = document.querySelectorAll('#relative_word a');
            let category_ids = [...relativeWords];
            category_ids = category_ids.map(x => {
                return x.href.slice(x.href.search('category_id=') + 12, x.href.search('&') == -1 ? x.href.length : x.href.search('&'))
            })
            return category_ids
        })(),
        "code": (() => {
            return document.querySelector('#product_code_dynamic').innerHTML
        })(),
        "description": (() => {
            return document.querySelector('[name="description"').content
        })(),
        "has_stock": (() => {
            let soldOutCheck = document.querySelector(['#aanotice', '.soldout_notice'])
            let has_stock = soldOutCheck ? false : true
            return has_stock
        })(),
        "image": (() => {
            return document.querySelector('.slick-slide img').src
        })(),
        "is_limited": false,
        "price": (() => {
            return document.querySelector('[itemprop=price]').innerText.split(',').join('')
        })(),
        "quantity": (() => {
            return document.querySelector('[name="quantity"]').value
        })(),
        "seller": 'store.iketei.jp',
        "seller_id": '0',
        "title": (() => {
            return document.querySelector("#_brand3").innerText
        })(),
        "unavailable": (() => {
            let soldOutCheck = document.querySelector(['#aanotice', '.soldout_notice'])
            let unavailable = soldOutCheck ? '1' : (() => {
                let variationCheck = document.querySelector('input[type="radio"]:checked')
                return !variationCheck ? '2' : (() => {
                    let errorCheck = document.querySelector('#cartbtn_dynamic')
                    return errorCheck.style.display == 'none' ? '0' : '1';
                })()
            })();
            return unavailable
        })(),
        "url": (() => {
            return window.location.href
        })(),
        "variations": (() => {
            let checked = document.querySelector('input[type="radio"]:checked')
            if (!checked) return []
            else {
                let checkedId = checked.id;
                return [{
                    "key": "variation",
                    "value": document.querySelector(`[for=${checkedId}] .c1title`).firstChild.textContent
                }]
            }
        })(),
        "service_type": '1373',
        "has_option_stock": true,
        "invalidType": null
    }
}

//CSS
(() => {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
    .bcTool_btn{
        height: 46px;
        width: 146px;
        background-color: #12576d;
        border: 0 none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 12px;
        line-height: 1.3;
        margin: 0;
        padding: 5px;
        text-align: center;
        text-decoration: none;
    }
    .bcTool_btn:hover {
        opacity:0.85
    }

    .bcTool_btn + .bcTool_btn {
        margin-left:5px    
    }
    
    #checkout-button{
        background-color: transparent;
        border: 0;
        fill: #12576d;
        cursor: pointer;
        font-size: 32px;
        line-height: inherit;
        margin: 0 10px;
        outline: none;
        padding: 0;
        position: relative;
        width: 30px;
    }

    .bcTool__cart {
        background-color: transparent;
        border: 0;
        color: #12576d;
        cursor: pointer;
        font-size: 32px;
        line-height: inherit;
        margin: 0 10px;
        outline: none;
        padding: 0;
        position: relative;
    }

    .bcTool__cart.has-items::after{
        background-color: red;
        border-radius: 50%;
        content: "";
        display: block;
        height: 14px;
        position: relative;
        top: -12px;
        right: -56px;
        width: 14px;
        z-index: 11;
    }
    


    .bcTool_btn.is-disabled {
        cursor:default;
        background-color:#cccccc;
        border:none;
        opacity: 1 !important
    }
    
    .buyee-bcF-popup-expand {
        background: none transparent;
        border: none;
        display: block;
        max-width: 1200px;
        opacity: 1;
        position: fixed;
        top: auto;
        right: auto;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        transition: none 0s ease 0s;
        visibility: visible;
        width: 100%;
        z-index:10
    }

    .bcTool{
        background-color: #5b6770;
        border: 3px solid #5b6770;
        border-radius: 4px;
        box-shadow: 0 5px 12px rgb(0 0 0 / 20%);
        padding: 0;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 98%;
        z-index: 2147483647;
        max-width:1170px;   
        bottom:0;
        overflow: hidden;
    }

    .bcTool_header{
        align-items: center;
        color: #fff;
        display: flex;
        justify-content: space-between;
        padding: 4px 8px 5px;
    }
    
    .bcTool__heading{
        flex: none;
        font-size: 14px;
    }
    
    .bcTool__subHeading{
        display: inline-block;
        margin: auto auto auto 10px;
        font-size: 12px;
    }
    
    .bcTool__toggleBtn{
        color: #fff;
        cursor: pointer;
        display: inline-block;
        font-size: 11px;
        letter-spacing: .1em;
        padding: 0;
        width: auto;
    }

    .is-closed .bcTool__toggleBtn.bcTool__toggleBtn--down {
        flex: none;
        margin-left: 5px;
    }

    .bcTool__toggleBtn.bcTool__toggleBtn--up {
        display: none;
    }

    .is-closed .bcTool__toggleBtn.bcTool__toggleBtn--up {
        align-items: center;
        background-color: #fff;
        border: 2px solid;
        color: #12576d;
        display: flex;
        flex-direction: row;
        height: 40px;
        justify-content: center;
        line-height: 1.1;
        padding: 5px;
        width: 180px;
    }
    
    .bcTool_main{
        background-color: #fff;
        border-radius: 2px;
        overflow: hidden;
        padding: 0;
        display:flex;
        box-sizing: inherit;
        min-height: 95.5px;
    }
    
    
    .bcTool__mainHeader{
        align-items: flex-start;
        align-content: space-between;
        display: flex;
        flex-direction: column;
        width: 210px;
        justify-content: space-between;
        padding: 10px;
        position: relative;
        flex: none;
    }

    .bcTool__mainHeader a{
        color: #12576d;
        text-decoration: none;
        font-size: 12px;
    }
    
    .bc__buyeeLogo{
        width: 110px;
        margin-right: 5px;
    }
    
    .bcTool__guideLink{
        margin: auto 5px auto 0;
        overflow: hidden;
        text-align: right;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-right: 0;
        text-align-last: left;
        width: 104px;
    }

    .bcTool__guideLink svg{
        width: 10px;
        fill:#12576d;
    }


    .bcTool__mainHeaderCont{
        justify-content: space-between;
        max-height: 50px;
        align-items: center;
        display: inline-flex;
        width: 100%;
    }

    .bcTool__mainContents{
        background-color: #fff;
        overflow: auto;
        padding: 10px;
        flex: auto;
        align-self: center;
    }

    .bc__paragraph{
        font-size: 14px;
        line-height: 1.5;
        margin: 0;
        overflow: hidden;
    }

    .bc__paragraph.bc__paragraph--main {
        font-size: 16px;
        font-weight: bold;
    }

    .bc__paragraph.bc__paragraph--annotation {
        font-size: 13px;
        font-weight: bold;
    }
    
    .bc__paragraph+.bc__paragraph {
        margin-top: 0.5em;
    }

    .bc__selectBox {
        align-items: center;
        border-radius: 4px;
        box-sizing: border-box;
        color: #999;
        display: inline-flex;
        height: 30px;
        overflow: inherit;
        padding: 5px;
        position: static;
        top: 10px;
        right: 10px;
        width: auto;
        z-index: 10;
    }
    
    .bc__selectBox svg{
        width: 13px;
        margin: 5px;
    }

    .bc__selectBox select {
        appearance: none;
        background-color: transparent;
        border: none;
        color: #999;
        cursor: pointer;
        font-size: 12px;
        margin: 0;
        outline: none;
        padding: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 50px;
    }

    .bcTool__main .bc__selectBox {
        position: static;
    }

    .bcTool_footer{
        background-color: #f3f3f3;
        display: flex;
        height: auto;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        flex: none;
        flex-wrap: nowrap;
        width: auto;
    }

    .is-closed .bcTool_header{
        display:none;
    }

    .is-closed .bcTool_main{
        display:none
    }

    .bcTool.is-closed{
        border: none;
        width:194px;
        min-height: 54px;
    }

    .is-hided{
        display: none;
    }

    @media only screen and (max-width: 739px){
        .bcTool_main{
            display:block
        }
        .bc__paragraph.bc__paragraph--annotation {
            font-size:12px;
        }
        .bc__paragraph.bc__paragraph--main{
            font-size:14px;
        }
        .bc__buyeeLogo{
            width:85px;
        }
        .bcTool__mainHeader{
            flex-direction: row;
            align-items:center;
            width: auto;
            justify-content: space-between;
        }
        .bcTool__mainHeaderCont {
            justify-content: flex-end;
        }

        .bcTool__guideLink{
            width:auto;
        }
        .bcTool__guideLink{
            width:auto;
        }
        .bcTool_footer{
            width:auto;
        }
        #add-button{
            flex:1;
        }
        .bcTool_btn{
            height:38px;
            font-size:12px;
        }
        .bcTool__subHeading{
            display:none;
        }
        .bcTool__heading{
            12px;
        }
        .bcTool.is-closed{
            width:auto;
            min-height:0;
        }
        .is-closed .bcTool__toggleBtn.bcTool__toggleBtn--up{
            height:30px
        }
    }

    `
    document.head.appendChild(styleEl);
})();

(() => {

    //handle Functions
    const handleTakeItem = () => {
        let bc_items = JSON.parse(localStorage.getItem('bc_items')) ?? {};
        let item
        //Product Page Check
        try {
            item = takePropertiesIketei()
        } catch (err) {
            alert('This is not a product page!')
            return;
        }

        //Available Check
        switch (item.unavailable) {
            case "1": {
                alert("Out of stock")
                return;
            }
            case "2": {
                alert("Please select all options (quantity, size, color, etc.) for the item and proceed to order again.")
                return;
            }
            default: {
                alert("Success")
                const key = item.code + '_' + item.variations[0].value
                bc_items[key] = item
            }
                const jsonBc_items = JSON.stringify(bc_items);
                localStorage.setItem('bc_items', jsonBc_items);
        }

    }


    const handleCheckOut = () => {
        let bc_items = JSON.parse(localStorage.getItem('bc_items')) ?? {};
        const cartQuantity = Object.keys(bc_items).length
        if (cartQuantity === 0) alert('Cart is empty')
        else {
            console.log('Cart :');
            for (var item in bc_items) {
                if (bc_items.hasOwnProperty(item)) {
                    const itemJSON = JSON.stringify(bc_items[item]);
                    console.log(itemJSON)
                }
            }
            bc_items = {};
            const jsonBc_items = JSON.stringify(bc_items);
            localStorage.setItem('bc_items', jsonBc_items);
        }
    }

    const handleCloseUp = () => {
        let bcTool = document.querySelector('#bctool');
        bcTool.classList.contains('is-closed') ? bcTool.classList.remove('is-closed') : bcTool.classList.add('is-closed');
    }

    //BuyeeCart tool
    const buyeeHTML = `<div id="bctool" class="bcTool"> 
        <div class="bcTool_header">
            <div class="bcTool__heading">Overseas Ordering Cart</div>
            <div class="bcTool__subHeading">Buyee supports international shipping from this store.</div>
            <div id="bcTool__toggleBtn--down" class="bcTool__toggleBtn bcTool__toggleBtn--down">CLOSE</div>
        </div >
        <div class="bcTool_main">
            <div class="bcTool__mainHeader">
                <img src="https://connect.buyee.jp/d98401c1cb39759d4c69859f92cc0d8957daa352e7bc7ad4e459d27f738f95f0/widget/assets/677397bcc365a7fa2351ba258471e1dc.png" alt="buyee.jp" class="bc__buyeeLogo" loading="lazy">
                <div class="bcTool__mainHeaderCont">    
                    <a href="https://media.buyee.jp/guide/bcv2/en/product.html?rc=BC_iketei_guide" class="bcTool__guideLink" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>    
                    Usage Guide
                    </a>
                    <span class="bc__selectBox">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"/></svg>
                        <select id="header-nav__select-culture">
                            <option value="en">English</option>
                            <option value="ja">日本語</option>
                        </select>
                    </span>
                </div>
            </div>
            <div class="bcTool__mainContents">
                <p class="bc__paragraph bc__paragraph--main">Click "Add to Cart", then click on 'Checkout' to continue your order on Buyee.</p>
                <p class="bc__paragraph bc__paragraph--annotation">Note: Please be sure to select all options (quantity, size, color, etc.) for your desired product before proceeding to order.</p>
            </div>
            <div class="bcTool_footer">
            </div>
        </div>
        <div id="bcTool__toggleBtn--up" class="bcTool__toggleBtn bcTool__toggleBtn--up">
            Overseas Ordering Cart
        </div>
    </div >
    `;

    //create iframe ?
    (() => {
        const iframe = document.createElement("div")
        iframe.innerHTML += buyeeHTML
        iframe.id = 'buyee-bcFrame'
        iframe.className = 'buyee-bcF-popup-expand'
        document.body.appendChild(iframe)
    })();

    //create take Item button
    (() => {
        const btn = document.createElement("button")
        btn.innerText = 'Add to cart'
        btn.id = 'add-button'
        btn.classList.add('bcTool_btn')
        if (window.location.href.search('products/detail.php?') === -1) {
            btn.classList.add('is-disabled');
            btn.disabled = true;
            document.querySelector('.bc__paragraph--main').innerText = 'Proceed to the product details page on IKETEI ONLINE for the item you want, and confirm options such as desired size, color, quantity, etc.'
            document.querySelector('.bc__paragraph--annotation').classList.add('is-hided');
        }
        btn.onclick = handleTakeItem
        document.querySelector('.bcTool_footer').appendChild(btn)
    })();
    //create checkout button
    (() => {
        const checkOutHTML = `
        <a href=# class="bcTool__cart has-items">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
        </a>`
        document.querySelector('.bcTool_footer').innerHTML += checkOutHTML;
        const btn = document.querySelector('.bcTool_footer svg');
        btn.id = 'checkout-button';
        btn.onclick = handleCheckOut
        document.querySelector('.bcTool_footer').appendChild(btn)
    })();


    //CLOSE-UP
    document.querySelector('#bcTool__toggleBtn--down').onclick = handleCloseUp
    document.querySelector('#bcTool__toggleBtn--up').onclick = handleCloseUp

})()
