document.addEventListener("DOMContentLoaded", function () {
    // AOS.init();
    let catalogMenuBtn = document.querySelector(".header__block-catalog");
    let tabCatalogMenu = document.querySelector(".header__tab-modal");
    let changingIcon = document.querySelector(".changingIcon");
    let menuBlock = document.querySelector(".header__modal-container");
    let wrapper = document.querySelector(".wrapper");
    let body = document.body;
    let clientWidth = document.documentElement.clientWidth;
    let logoitem = document.querySelector(".header__block-logo");
    let citiesSelect = document.querySelector(".cities-select");
    let requestblock = document.querySelector(".request");
    let headerTOp = document.querySelector(".header-top-block");
    let headerBlock = document.querySelector(".header__block");
    let catalogBlock = document.querySelector(".catalog");
    let mainTable = document.querySelector(".header__tab-modal-block");
    let underHeader = document.querySelector(".under-header");
    let mainTorgBlock = document.querySelector(".torgBlock");
    let SidesBlock = document.querySelector(".ordering .ordering__block .ordering__sides");
    let orderingBlocks = document.querySelector(".ordering__block");
    let flavorsBlock = document.querySelector(".flavors__block");
    catalogMenuBtn.addEventListener("click", function (e) {
        e.preventDefault;
        catalogMenuBtn.classList.toggle("active");

        if (catalogMenuBtn.classList.contains("active")) {
            changingIcon.setAttribute("uk-icon", "icon: close; ratio: 1");
        } else {
            changingIcon.setAttribute("uk-icon", "icon: menu; ratio: 1");
        };

        if (clientWidth > 820) {
            wrapper.classList.toggle("active");
            body.classList.toggle("active");
            menuBlock.classList.toggle("active");
            logoitem.classList.toggle("z-indexover");
            citiesSelect.classList.toggle("z-indexover");
            headerTOp.classList.toggle("z-indexover");
            requestblock.classList.toggle("z-indexover");
            underHeader.classList.toggle("z-indexover");
            SidesBlock.classList.toggle("z-indexover");
            orderingBlocks.classList.toggle("z-indexover");
            mainTorgBlock.classList.toggle("z-indexover");
            flavorsBlock.classList.toggle("z-indexover");
            catalogBlock.classList.toggle("z-indexover");

        } else if (clientWidth < 820) {
            // headerTOp.classList.toggle("indexover");
            body.classList.toggle("fixed");
            tabCatalogMenu.classList.toggle("active");
            mainTable.classList.toggle("actived");
            // headerBlock.classList.toggle("actived");
        };
    });

    if (clientWidth > 820) {
        let wrapperJ = $(".wrapper");
        let catalogMenuBtnJ = $(".header__block-catalog");
        let bodyJ = $(body);
        let menuJ = $(".header__modal-container");
        let logoitemJ = $(".header__block-logo");
        let citiesSelectJ = $(".cities-select");
        let requestblockJ = $(".request");
        let headerTOpJ = $(".header-top-block");
        let sidesBlockJ = $(".ordering .ordering__block .ordering__sides");
        let orderingBlocksJ = $(".ordering__block");
        let mainTorgBlockJ = $(".torgBlock");
        let flavorsBlockJ = $(".flavors__block");
        let underHeaderJ = $(".under-header");
        let changingIconJ = $(".changingIcon");
        let catalogBlockJ = $(".catalog");

        $(document).mouseup(function (e) {
            if (!menuJ.is(e.target) && menuJ.has(e.target).length === 0) {
                catalogMenuBtnJ.removeClass("active");
                wrapperJ.removeClass("active");
                bodyJ.removeClass("active");
                menuJ.removeClass("active");
                logoitemJ.removeClass("z-indexover");
                citiesSelectJ.removeClass("z-indexover");
                requestblockJ.removeClass("z-indexover");
                headerTOpJ.removeClass("z-indexover");
                sidesBlockJ.removeClass("z-indexover");
                orderingBlocksJ.removeClass("z-indexover");
                mainTorgBlockJ.removeClass("z-indexover");
                flavorsBlockJ.removeClass("z-indexover");
                underHeaderJ.removeClass("z-indexover");
                catalogBlockJ.removeClass("z-indexover");
                changingIconJ.attr("uk-icon", "icon: menu; ratio: 1");
            }
        });
    }

    if (clientWidth > 820) {
        $(".about-Rec-item").addClass("uk-open");
        $(".about-Rec-item-title").attr("aria-expanded", "true");
        $(".about-Rec-content").removeAttr("hidden");
        $(".deliveryadress-item").addClass("uk-open");
        $(".deliveryadress-item-title").attr("aria-expanded", "true");
        $(".deliveryadress-item-content").removeAttr("hidden");

    } else if (clientWidth < 820) {
        $(".about-Rec-item").removeClass("uk-open");
        $(".deliveryadress-item").removeClass("uk-open");
        $(".deliveryadress-item-content").attr("hidden", "true");

    }

    // удаление карт
    $(".delete__card").on("click", function () {
        $(this).parent().remove();
    });

    let selectionitems = $(".header__nav__items .header__nav__item");
    let selectedNavItems = $(".header__Mainnav-subs .header-Mainnav-item");
    selectionitems.each(function (index) {
        $(this).hover(function (e) {
            let clickedbtn = $(this).attr("data-name");

            selectedNavItems.each(function (index) {
                let choosedItemAttr = $(this).attr("data-name");
                let choseditemNav = $(this);

                if (clickedbtn == choosedItemAttr) {
                    choseditemNav.addClass("selected");
                    selectedNavItems.not(choseditemNav).removeClass("selected");
                } else {
                    return null;
                }
            });
        });
    });

    let mainTableBlock = $(".header__tab-modal-block");
    let thrTableBlock = $(".header__tab-modal-thr-items");
    let mainTabblockItems = $(".header__tab-modal-link-subs .header__tab-modal-link-sub");
    let thrTabblockItems = $(".header__tab-modal-thr-items .header__tab-thr-item");
    mainTabblockItems.each(function (index) {
        $(this).on("click", function (e) {
            e.preventDefault();
            let clickedbtn = $(this).attr("data-name");
            thrTabblockItems.each(function (index) {
                let choosedItemAttr = $(this).attr("data-name");
                let choseditemNav = $(this);

                if (clickedbtn == choosedItemAttr) {
                    choseditemNav.addClass("visible");
                    thrTabblockItems.not(choseditemNav).removeClass("visible");
                    mainTableBlock.removeClass("actived");
                    thrTableBlock.addClass("actived");
                } else {
                    return null;
                }
            });
        });
    });

    let tabBackArrow = $(".header__tab-thr-item-top .backitemspa");
    tabBackArrow.on("click", function (e) {
        e.preventDefault();
        mainTableBlock.addClass("actived");
        thrTableBlock.removeClass("actived");
    });

    $('.users-list01 li').hide();
    $('.users-list02 li').hide();
    $('.users-list01 li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });


    $(document).ready(function () {
        $('.filter_users').on('input', function () {
            var searchTerm = $(this).val().toLowerCase();
            var hasResults = false;
            if (searchTerm.trim() !== '') {
                $(this).addClass('active')
                $('body').addClass('active')
                $(".wrapper").addClass("active");
                $(".header-top-block").addClass("z-indexover");
                $(".request").addClass("z-indexover");
                $(".catalog").addClass("z-indexover");
                $(".hero").addClass("z-indexover");
                $(".under-header").addClass("z-indexover");
                $(".ordering__block").addClass("z-indexover");
                $(".torgBlock").addClass("z-indexover");
                $(".flavors__block").addClass("z-indexover");
                $('#users-list li').each(function () {
                    var listItemText = $(this).data('search-term').toLowerCase();
                    if (listItemText.indexOf(searchTerm) !== -1) {
                        $(this).show();
                        hasResults = true;
                    } else {
                        $(this).hide();
                    }
                    if (hasResults) {
                        $('#no-results-message').hide();
                        $("#filter_users").removeClass("noProduct");
                    } else {
                        $('#no-results-message').show();
                        $("#filter_users").addClass("noProduct");
                    }
                });
            } else {
                $('#users-list li').hide();
                $(this).removeClass('active')
                $('body').removeClass('active')
                $(".wrapper").removeClass("active");
                $(".header-top-block").removeClass("z-indexover");
                $(".request").removeClass("z-indexover");
                $(".catalog").removeClass("z-indexover");
                $(".hero").removeClass("z-indexover");
                $(".under-header").removeClass("z-indexover");
                $(".ordering__block").removeClass("z-indexover");
                $(".torgBlock").removeClass("z-indexover");
                $(".flavors__block").removeClass("z-indexover");
            }
        });
        $('#clear_search').on('click', function (e) {
            e.preventDefault;
            $('#filter_users').val('');
            $('#users-list li').show();
        });
    });
    $('.users-list01').on("mouseleave", function () {
        $('.users-list01 li').hide();
    });
    $('.users-list02 li').each(function () {
        $(this).attr('data-search-term', $(this).text().toLowerCase());
    });
    $('.filter_users02').on('keyup', function () {
        var searchTerm = $(this).val().toLowerCase();
        $('.users-list02 li').each(function () {
            if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    $('.users-list02').on("mouseleave", function () {
        $('.users-list02 li').hide();
    });


    $('.filter_users03').on('input', function () {
        var this_input = $(this);
        var searchTerm = this_input.val().toLowerCase();
        this_input.siblings('.users-list03').find('li').each(function () {
            $(this).attr('data-search-term', $(this).text().toLowerCase());
        });
        var hasResults = false;
        var noResultsMessages = this_input.siblings('.no-results-messages');
        console.log(noResultsMessages);
        if (searchTerm.trim() !== '') {
            this_input.addClass('active');
            this_input.siblings('.users-list03').find('li').each(function () {
                var listItemText = $(this).data('search-term').toLowerCase();
                if (listItemText.indexOf(searchTerm) !== -1) {
                    $(this).show();
                    hasResults = true;
                } else {
                    $(this).hide();
                    hasResults = false;
                }
            });
            if (hasResults) {
                noResultsMessages.hide();
                this_input.removeClass("noProduct");
            } else {
                noResultsMessages.show();
                this_input.addClass("noProduct");
            }
        } else {
            noResultsMessages.hide();
            this_input.siblings('.users-list03').find('li').hide();
            this_input.removeClass('active');
        }
    });

    $('.createCard-searching-list li').hide();
    $('.createCard-search').on('input', function () {
        var this_input = $(this);
        var searchTerm = this_input.val().toLowerCase();
        this_input.siblings('.createCard-searching-list').find('li').each(function () {
            $(this).attr('data-search-term', $(this).text().toLowerCase());
        });
        var hasResults = false;
        var noResultsMessages = this_input.siblings('.no-results-messages');
        console.log(noResultsMessages);
        if (searchTerm.trim() !== '') {
            this_input.addClass('active');
            this_input.siblings('.createCard-searching-list').find('li').each(function () {
                var listItemText = $(this).data('search-term').toLowerCase();
                if (listItemText.indexOf(searchTerm) !== -1) {
                    $(this).show();
                    hasResults = true;
                    $(".createCard-searching-list").show();
                } else {
                    $(this).hide();
                    $(".createCard-searching-list").hide();
                }
            });
            if (hasResults) {
                noResultsMessages.hide();
                this_input.removeClass("noProduct");
            } else {
                noResultsMessages.show();
                this_input.addClass("noProduct");
            }
        } else {
            noResultsMessages.hide();
            this_input.siblings('.createCard-searching-list').find('li').hide();
            this_input.removeClass('active');
        }
    });


    let maxCards = 10;
    let x = 1;
    let addcardsBtn = $(".button_add");
    addcardsBtn.on("click", function (e) {
        e.preventDefault();
        let cardsBlock = $(".main-items");
        let addingCard = '<div class="purchReq__B-item uk-card uk-card-default"><span class="delete__card" uk-icon="icon: close; ratio: 1"></span><div class="purchReq__B-item__sides"><div class="purchReq__B-item-left__side"><div class="purchReq__B-L-L"><span class="purchReq__B__name">Выбор товара</span><div class="purchReq__B-L-L-catalog"><div class="uk-inline"><select class="product-select new-product-select0' + x + '"><option class="product-opt" name="product" value="1">Все категории</option><option class="product-opt" name="product" value="2">Ароматизаторы</option><option class="product-opt" name="product" value="3">Масла и экстракты</option><option class="product-opt" name="product" value="5">Красители</option><option class="product-opt" name="product" value="6">Сахарозаметели</option><option class="product-opt" name="product" value="7">Парфюмерные композиции</option><option class="product-opt" name="product" value="8">Отдушки</option><option class="product-opt" name="product" value="9">Усилители вкуса и аромата</option><option class="product-opt" name="product" value="10">Сахарозаметели</option><option class="product-opt" name="product" value="11">Кормовые добавки</option><option class="product-opt" name="product" value="12">Комплексные смеси</option><option class="product-opt" name="product" value="13">Эмульсии</option><option class="product-opt" name="product" value="14">Кислоты</option><option class="product-opt" name="product" value="15">Книги</option><option class="product-opt" name="product" value="16">Сырье пищевое</option><option class="product-opt" name="product" value="17">Сырье непищевое</option><option class="product-opt" name="product" value="18">Бакалея</option><option class="product-opt" name="product" value="19">Приправы и специи</option><option class="product-opt" name="product" value="20">Вода питьевая</option><option class="product-opt" name="product" value="21">Бытовая химия</option><option class="product-opt" name="product" value="22">Готовая продукция</option><option class="product-opt" name="product" value="23">Растворители</option></select></div></div></div><div class="purchReq__B-L-R"><input  type="text" class="filter_users03 purchReq__B-L-R-inp uk-input uk-form-width-medium" value="" placeholder="Наименование товара..."><ul  class="users-list users-list03"><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li></ul><p class="no-results-messages" style="display: none;">Внимание!<span>Товар отсутствует на сайте или в каталоге поставщика.</span></p></div></div><div class="purchReq__B-item-right__side"><div class="purchReq__B-R-L__sides"><div class="purchReq__B-R-L-L__side"><span class="purchReq__B__inf">За ед. товара*</span><span class="purchReq__B__name">Цена поставщика</span><span class="purchReq__B__price"> -</span></div><div class="purchReq__B-R-L-R__side"><span class="purchReq__B__name">Кол-во</span><div class="number"><button class="number-minus" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();">-</button><input class="uk-input input_small uk-form-width-medium" type="number" min="1" max="10 000" value="0" readonly><button class="number-plus" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();">+</button></div></div></div><div class="purchReq__B-R-R__sides"><div class="purchReq__B-R-R-L__side"><span class="purchReq__B__inf">За ед. товара*</span><span class="purchReq__B__name">Моя цена</span><input type="text" class="purchReq__B-R-R-L__inp uk-input" value="0"></div><div class="purchReq__B-R-R-R__side"><span class="purchReq__B__name">Сумма поставки</span><span class="purchReq__B__price">-</span></div></div></div></div><ul uk-accordion class="purchReq__B-accordion"><li class="purchReq__B-acc-li"><a class="purchReq__B-accordion-title uk-accordion-title" href="#">Подробнее о выбранном товаре<span uk-icon="icon: chevron-down; ratio: 1"></span></a><div class="purchReq__B-accordion-content uk-accordion-content"><div class="purchReq__B-content_img"><img src="assets/images/image 25.png" alt=""></div><div class="purchReq__B-content_texts"><span class="purchReq__B-content_title">Апельсин (терпена) эфирное масло жидкое</span><p class="purchReq__B-content_text"> Порошкообразный Аромат: томата, кумина, специй Вкус: острожгучий, сладкого перца, ноты томата и кумина <br> Цвет: оранжевый различной интенсивности Термостабильность: нетермостабильный Растворимость: водорастворимый,жирорастворимый.</p><a href="#" class="purchReq__B-content_link">Открыть страницу товара</a></div></div></li></ul></div>';

        if (x < maxCards) {
            x++;
            cardsBlock.append(addingCard);
            $(".delete__card").on("click", function () {
                $(this).parent().remove();
            });
        }
        for (var i = 2; i <= maxCards; i++) {
            if (x == i) {
                $(".new-product-select" + (i - 1).toString().padStart(2, '0')).niceSelect();
            }
        }
        $('.filter_users03').on('input', function () {
            var this_input = $(this);
            var searchTerm = this_input.val().toLowerCase();
            this_input.siblings('.users-list03').find('li').each(function () {
                $(this).attr('data-search-term', $(this).text().toLowerCase());
            });
            var hasResults = false;
            var noResultsMessages = this_input.siblings('.no-results-messages');
            console.log(noResultsMessages);
            if (searchTerm.trim() !== '') {
                this_input.addClass('active');
                this_input.siblings('.users-list03').find('li').each(function () {
                    var listItemText = $(this).data('search-term').toLowerCase();
                    if (listItemText.indexOf(searchTerm) !== -1) {
                        $(this).show();
                        hasResults = true;
                    } else {
                        $(this).hide();
                    }
                });
                if (hasResults) {
                    noResultsMessages.hide();
                    this_input.removeClass("noProduct");
                } else {
                    noResultsMessages.show();
                    this_input.addClass("noProduct");
                }
            } else {
                noResultsMessages.hide();
                this_input.siblings('.users-list03').find('li').hide();
                this_input.removeClass('active');
            }
        });
    });

    let torgMoreInfoModal = document.querySelector(".torg__T-MI-Modal");
    let torgMoreInfoModalacceptBtn = document.querySelector(".torg__T-MI-Modal-btn");
    torgMoreInfoModalacceptBtn.addEventListener("click", function (e) {
        e.preventDefault();
        UIkit.modal(torgMoreInfoModal).hide();
    });


    let maxCreateCards = 5;
    let y = 1;
    let addCreateCardsBtn = $(".addingCreateCard-btn");
    addCreateCardsBtn.on("click", function (e) {
        e.preventDefault();
        let cardsBlock = $(".createCard-items");
        let addingCreateCard = '<div class="createCard-item"><div class="createCard-item-sides"><div class="createCard-item-L__side"><div class="createCard-item-L-L"><span class="createCard-item-L-L__name">Выбор товара</span></div><div class="createCard-item-L-R"><input id="createCard-search" type="text" class="createCard-search createCard-search uk-input uk-form-width-medium" placeholder="Наименование товара..."><ul id="createCard-searching-list" class="createCard-searching-list createCard-searching-list' + y + '"><li class="createCard-list-item"><a href="#">Сладкий тайский перец</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li><li class="createCard-list-item"><a href="#">Апельсин (терпена) эфирное масло жидкое</a></li></ul><p class="no-results-messages" style="display: none;">Внимание!<span>Товар отсутствует на сайте или в каталоге поставщика.</span></p></div></div><div class="createCard-item-R__side"><div class="createCard-item-R__sides"><div class="createCard-item-R-L-L__side"><span class="createCard-item-R__inf">За ед. товара*</span><span class="createCard-item-R__name">Цена поставщика</span><span class="createCard-item-R__price">-</span></div><div class="createCard-item-R-L-R__side"><span class="createCard-item-R__name">Кол-во</span><div class="createCard-item-number number"><button class="number-minus" type="button" onclick="this.nextElementSibling.stepDown(); this.nextElementSibling.onchange();">-</button><input class="productCounts uk-input input_small uk-form-width-medium" type="number" min="1" max="10 000" value="0"><button class="number-plus" type="button" onclick="this.previousElementSibling.stepUp(); this.previousElementSibling.onchange();">+</button></div></div></div><div class="createCard-item-R-R__sides"><div class="createCard-item-R-R-R-L__side"><span class="createCard-item-R__inf">За ед. товара*</span><span class="createCard-item-R__name">Моя цена</span><input type="text" class="createCard-item-R-R-R-L__inp uk-input" value="0"></div><div class="createCard-item-R-R-R__side"><span class="createCard-item-R__name">Сумма поставки</span><span class="createCard-item-R__price">-</span></div></div></div></div><span class="inModalDelcard delete__Modalcard" uk-icon="icon: trash; ratio: 1"></span></div>';

        if (y < maxCreateCards) {
            y++;
            cardsBlock.append(addingCreateCard);
            $(".createCard-item").ready(function () {
                $(".delete__Modalcard").click(function () {
                    $(this).parent().remove();
                });
            });
        }
        $('.createCard-search').on('input', function () {
            var this_input = $(this);
            var searchTerm = this_input.val().toLowerCase();
            this_input.siblings('.createCard-searching-list').find('li').each(function () {
                $(this).attr('data-search-term', $(this).text().toLowerCase());
            });
            var hasResults = false;
            var noResultsMessages = this_input.siblings('.no-results-messages');
            console.log(noResultsMessages);
            if (searchTerm.trim() !== '') {
                this_input.addClass('active');
                this_input.siblings('.createCard-searching-list').find('li').each(function () {
                    var listItemText = $(this).data('search-term').toLowerCase();
                    if (listItemText.indexOf(searchTerm) !== -1) {
                        $(this).show();
                        hasResults = true;
                    } else {
                        $(this).hide();
                    }
                });
                if (hasResults) {
                    noResultsMessages.hide();
                    this_input.removeClass("noProduct");
                } else {
                    noResultsMessages.show();
                    this_input.addClass("noProduct");
                }
            } else {
                noResultsMessages.hide();
                this_input.siblings('.createCard-searching-list').find('li').hide();
                this_input.removeClass('active');
            }
        });
    });

    $(".createCard-item").ready(function () {
        $(".delete__Modalcard").click(function () {
            $(this).parent().remove();
        });
    });

    $(".deliveryadress-item-title").on("click", function () {
        if ($(".deliveryadress-item").hasClass("uk-open")) {
            $(".deliveryadress-title-img").attr("src", "assets/images/homeicon.png");
        } else {
            $(".deliveryadress-title-img").attr("src", "assets/images/backicon.png");
        };
    });

    $(".closeRecepientBtn").on("click", function () {
        $(".about-Rec-item").removeClass("uk-open");
        $(".about-Rec-content").removeClass("show");
    });

    $(".waysToGet-item").each(function () {
        $(this).on("click", function () {
            $(this).addClass("active");
            $(".waysToGet-item").not($(this)).removeClass("active");
        });
    });

    $(".choise-item").each(function () {
        $(this).on("click", function () {
            $(this).addClass("active");
            $(".choise-item").not($(this)).removeClass("active");

            if ($(".choiseEntity").hasClass("active")) {
                $(".ordering-R-side-item02").addClass("active");
                $(".ordering-R-side-item01").removeClass("active");
                $(".payment-type01").removeClass("active");
                $(".payment-type02").addClass("active");
                $(".cashless-payment").addClass("show");
            } else {
                $(".ordering-R-side-item01").addClass("active");
                $(".ordering-R-side-item02").removeClass("active");
                $(".cashless-payment").removeClass("show");
            }
        });
    });
    $(".choise-mail").each(function () {
        $(this).on("click", function () {
            $(this).addClass("active");
            $(".choise-mail").not($(this)).removeClass("active");
        });
    });
    $(".payment-item").each(function () {
        $(this).on("click", function () {
            $(this).addClass("active");
            $(".payment-item").not($(this)).removeClass("active");
        });
    });


    $('.cities-select').niceSelect();
    $('.cities-select02').niceSelect();
    $(".sort-B-form-s").niceSelect();
    $('.product-select01').niceSelect();
    $('.product-select02').niceSelect();
    $('.product-select03').niceSelect();
    $('.createCard-Cities').niceSelect();


    let seeMorecheckboxes = $(".flavors__acc-check-see__more");
    let moreCheckbox = $(".more__checkbox");
    let checksScroll = $(".flavors__acc-checkboxs");

    seeMorecheckboxes.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        moreCheckbox.toggleClass('active');
        checksScroll.toggleClass('active');
    });

    let flavorsCheck = $(".flavors__acc-checkboxs label");
    let flavorslink = $(".showProduct");

    flavorsCheck.each(function (check) {
        $(this).on("click", () => {
            if (checksScroll.hasClass("active")) {
                flavorsCheck.removeClass("active");
            } else {
                $(this).addClass("active");
                flavorsCheck.not($(this)).removeClass("active");
            }
        });
    });

    let moreSortCheckbox = $(".sort__more");
    let sortmorechecksbtn = $(".sort__acc-checks-more");

    sortmorechecksbtn.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        moreSortCheckbox.toggleClass('active');
    });

    let moreProdItems = $(".more-items");
    let showMoreProdItemsBtn = $(".see__more-items-btn");
    showMoreProdItemsBtn.on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        moreProdItems.toggleClass('active');
    });

    let sortName = $(".sort-B-form-btn-name");
    let sortsNames = $(".sort-B-form-items .sort-B-form-item");
    sortsNames.each(function (sortingName) {
        $(this).on("click", function (e) {
            $(this).addClass("active");
            sortsNames.not($(this)).removeClass("active");

            if ($(this).hasClass("active")) {
                sortName.text($(this).text());
            } else {
                null;
            }
        });
    });

    const rangeInput = document.querySelectorAll(".range-input input"),
        priceInput = document.querySelectorAll(".price-input input"),
        range = document.querySelector(".slider .progress");
    let priceGap = 7000;

    priceInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput[0].value),
                maxPrice = parseInt(priceInput[1].value);

            if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                if (e.target.className === "input-min") {
                    rangeInput[0].value = minPrice;
                    range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                } else {
                    rangeInput[1].value = maxPrice;
                    range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput[0].value),
                maxVal = parseInt(rangeInput[1].value);

            if (maxVal - minVal < priceGap) {
                if (e.target.className === "range-min") {
                    rangeInput[0].value = maxVal - priceGap;
                } else {
                    rangeInput[1].value = minVal + priceGap;
                }
            } else {
                priceInput[0].value = minVal;
                priceInput[1].value = maxVal;
                range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
            }
        });
    });

    const rangeInput02 = document.querySelectorAll(".range-input02 input"),
        priceInput02 = document.querySelectorAll(".price-input02 input"),
        range02 = document.querySelector(".slider02 .progress02");
    let priceGap02 = 7000;

    priceInput02.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minPrice = parseInt(priceInput02[0].value),
                maxPrice = parseInt(priceInput02[1].value);

            if (maxPrice - minPrice >= priceGap02 && maxPrice <= rangeInput02[1].max) {
                if (e.target.className === "input-min02") {
                    rangeInput02[0].value = minPrice;
                    range02.style.left = (minPrice / rangeInput02[0].max) * 100 + "%";
                } else {
                    rangeInput02[1].value = maxPrice;
                    range02.style.right = 100 - (maxPrice / rangeInput02[1].max) * 100 + "%";
                }
            }
        });
    });

    rangeInput02.forEach((input) => {
        input.addEventListener("input", (e) => {
            let minVal = parseInt(rangeInput02[0].value),
                maxVal = parseInt(rangeInput02[1].value);

            if (maxVal - minVal < priceGap02) {
                if (e.target.className === "range-min02") {
                    rangeInput02[0].value = maxVal - priceGap02;
                } else {
                    rangeInput02[1].value = minVal + priceGap02;
                }
            } else {
                priceInput02[0].value = minVal;
                priceInput02[1].value = maxVal;
                range02.style.left = (minVal / rangeInput02[0].max) * 100 + "%";
                range02.style.right = 100 - (maxVal / rangeInput02[1].max) * 100 + "%";
            }
        });
    });

    let promoInp = $(".cost-delTime-inp");
    let promoBtn = $(".cost-delTime-addPromo-btn");

    promoInp.on("input", function () {
        if (!promoInp.val()) {
            promoBtn.removeClass("actived");
            promoBtn.attr("disabled", true);
        } else {
            promoBtn.addClass("actived");
            promoBtn.removeAttr("disabled");
        }
    })

    let openTabFIlterModalBtn = $(".tab-Filter-OpenM-btn");
    let tabFilterModal = $(".tab-Filter-M-Block");
    let tabThrModalBLock = $(".tab-Filter-M-thr-block");
    let openThrModalBlock = $(".open-More-filter-block-btn");
    let bodyBLOCK = $("body");
    openTabFIlterModalBtn.on("click", function (e) {
        e.preventDefault();
        tabFilterModal.addClass("opened");
        bodyBLOCK.addClass("fixed");
    });

    let backfromtabM = $(".backimgspan");
    backfromtabM.on("click", function (e) {
        e.preventDefault();
        tabFilterModal.removeClass("opened");
        bodyBLOCK.removeClass("fixed");
    });

    openThrModalBlock.on("click", function (e) {
        e.preventDefault();
        tabThrModalBLock.addClass("opened");
        tabFilterModal.removeClass("opened");
    });

    let backtoTblockBtn = $(".backtoTblockimg");
    backtoTblockBtn.on("click", function (e) {
        e.preventDefault();
        tabThrModalBLock.removeClass("opened");
        tabFilterModal.addClass("opened");
    });

    $('[data-search]').on('keyup', function () {
        var searchVal = $(this).val();
        var filterItems = $('[data-filter-item]');

        if (searchVal != '') {
            filterItems.addClass('hidden');
            $('[data-filter-item][data-filter-name*="' + searchVal.toLowerCase() + '"]').removeClass('hidden');
        } else {
            filterItems.removeClass('hidden');
        }
    });

    let openFlavorsMoreinfobtn = $(".open-More-info-points");
    let closedFlavorsMoreinfobtn = $(".close-more-info-text");
    openFlavorsMoreinfobtn.each(function () {
        $(this).on('click', function () {
            $(this).addClass('closed');
            $(this).next().addClass('opened');
        });
    });
    closedFlavorsMoreinfobtn.each(function () {
        $(this).on('click', function () {
            $(this).parent().removeClass('opened');
            $(this).parent().prev().removeClass('closed');
        });
    });


    let filter2Clear = $(".filter__users02clear");

    filter2Clear.on("click", function (e) {
        e.preventDefault();
        $("#filter_users02").val('');
    });

    // forms Validations

    $(document).on('focus', '[required]', function () {
        $(this).removeClass('not-valid');
    });

    function validateInput(t, skipState) {
        var valid = true;
        if (!t.val()) {
            valid = false;
        }
        if (t.attr('type') === 'email') {
            if (!validateEmail(t.val())) {
                valid = false;
            }
        }
        if (t.attr('type') === 'tel') {
            if (t.val().length !== 12) {
                valid = false;
            }
        }
        if (t.attr('type') === 'checkbox') {
            if (t.prop('checked')) {
                valid = true;
            } else {
                valid = false;
            }
        }
        if (skipState) {
            return valid;
        }
        if (valid) {
            t.removeClass('not-valid');
            t.addClass('valid');
        } else {
            t.removeClass('valid');
            t.addClass('not-valid');
        }
        return valid;
    }

    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-ZА-Яа-яЁё\-0-9]+\.)+[a-zA-ZА-Яа-яЁё]{2,}))$/;
        return re.test(email);
    }


    // input-tel
    $(document).on('input', '[type="tel"]', function (event) {
        var t = $(this);
        var val = t.val();
        val = val.replace(/[^\d]/g, '');
        t.val(val);
        if (!val) {
            return;
        }
        if (val === '8' || val === '7') {
            val = '+7';
        } else if (val === '9') {
            val = '+79';
        } else if (val !== '+') {
            val = '+' + val;
        }
        if (val.length > 12) {
            val = val.slice(0, 12);
        }
        t.val(val);
    });

    // input-name
    $(document).on('input', '.inputName', function (event) {
        var t = $(this);
        var val = t.val();
        val = val.replace(/[^a-zA-ZА-Яа-яЁё ]/g, '');
        t.val(val);
    });


    // find city 

    $(".x-drop-down__value").click(function (event) {
        toggleMenu();
        event.stopPropagation();
    });

    $('.b-drop-down__list-item').click(function () {
        $('.x-drop-down__value').html($(this).text());
        toggleMenu();
    });

    function toggleMenu() {
        let menu = $(".x-drop-down__dropped");
        if (!menu.hasClass('active')) {
            window.addEventListener('click', closeMenu);
        } else {
            window.removeEventListener('click', closeMenu);
        }
        menu.toggleClass("active");
    }

    function closeMenu() {
        $(".x-drop-down__dropped").removeClass("active")
    }

    $('.x-drop-down__dropped').click(function (event) {
        event.stopPropagation();
    });


    $('.x-input__field').on('input', function () {
        let search = $(this).val();
        searchData(search);
    });

    function searchData(search) {
        let towns = $('.b-drop-down__list-item');
        towns.each(function () {
            if ($(this).text().indexOf(search) === -1) {
                $(this).addClass('item_hide');
            } else {
                $(this).removeClass('item_hide');
            }
        });
    }

    let swiper = new Swiper(".catalog-swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            1024: {
                slidesPerView: 4,
            },
            800: {
                slidesPerView: 3,
            },
            600: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 1.2,
            },
        },
    });
});