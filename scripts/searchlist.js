function searchFunction() {
    const query = document.getElementById('searchBar').value.toLowerCase();

    if (query.includes("elysia")) {
        window.location.href = '/pages/elysia.html';
    } else if (query.includes("ryo")) {
        window.location.href = '/pages/ryo-yamada.html';
    } else if (query.includes("mahiru")) {
        window.location.href = '/pages/mahiru-shiina.html';
    } else if (query.includes("zeta")) {
        window.location.href = '/pages/vestia-zeta.html';
    } else if (query.includes("bocchi")) {
        window.location.href = '/pages/bocchi.html';
    } else if (query.includes("kafka")) {
        window.location.href = '/pages/kafka.html';
    } else if (query.includes("hutao")) {
        window.location.href = '/pages/hu-tao.html';
    } else if (query.includes("hu tao")) {
        window.location.href = '/pages/hu-tao.html';
    } else if (query.includes("nijika")) {
        window.location.href = '/pages/nijika.html';
    } else if (query.includes("kita")) {
        window.location.href = '/pages/kita.html';
    } else if (query.includes("ikuyo kita")) {
        window.location.href = '/pages/kita.html';
    } else if (query.includes("kobo")) {
        window.location.href = '/pages/kobo.html';
    } else if (query.includes("kobo kanaeru")) {
        window.location.href = '/pages/kobo.html';
    } else if (query.includes("elaina")) {
        window.location.href = '/pages/elaina.html';
    } else if (query.includes("shizuka")) {
        window.location.href = '/pages/shizuka.html';
    } else if (query.includes("shizuka mikazuki")) {
        window.location.href = '/pages/shizuka.html';
    } else if (query.includes("yae miko")) {
        window.location.href = '/pages/yae-miko.html';
    } else if (query.includes("nakano miku")) {
        window.location.href = '/pages/nakano-miku.html';
    } else if (query.includes("furina")) {
        window.location.href = '/pages/furina.html';
    } else if (query.includes("yelan")) {
        window.location.href = '/pages/yelan.html';
    } else if (query.includes("keqing")) {
        window.location.href = '/pages/keqing.html';
    } else if (query.includes("ninym")) {
        window.location.href = '/pages/ninym.html';
    } else if (query.includes("ayaka")) {
        window.location.href = '/pages/ayaka.html';
    } else if (query.includes("raiden shogun")) {
        window.location.href = '/pages/raiden-shogun.html';
    } else if (query.includes("raiden ei")) {
        window.location.href = '/pages/raiden-shogun.html';
    } else if (query.includes("nakano ichika")) {
        window.location.href = '/pages/nakano-ichika.html';
    } else if (query.includes("nakano nino")) {
        window.location.href = '/pages/nakano-nino.html';
    } else if (query.includes("nino")) {
        window.location.href = '/pages/nakano-nino.html';
    } else if (query.includes("nakano nino")) {
        window.location.href = '/pages/nakano-nino.html';
    } else if (query.includes("nakano itsuki")) {
        window.location.href = '/pages/nakano-itsuki.html';
    } else if (query.includes("itsuki")) {
        window.location.href = '/pages/nakano-itsuki.html';
    } else if (query.includes("nakano yotsuba")) {
        window.location.href = '/pages/nakano-yotsuba.html';
    } else if (query.includes("yotsuba")) {
        window.location.href = '/pages/nakano-yotsuba.html';
    } else if (query.includes("shiroko")) {
        window.location.href = '/pages/shiroko.html';
    } else if (query.includes("hina")) {
        window.location.href = '/pages/hina.html';
    } else if (query.includes("jingliu")) {
        window.location.href = '/pages/jingliu.html';
    } else if (query.includes("topaz")) {
        window.location.href = '/pages/topaz.html';
    } else if (query.includes("march")) {
        window.location.href = '/pages/march.html';
    } else if (query.includes("rio")) {
        window.location.href = '/pages/rio.html';
    } else if (query.includes("theresa")) {
        window.location.href = '/pages/theresa.html';
    } else if (query.includes("kiana")) {
        window.location.href = '/pages/kiana.html';
    } else if (query.includes("frieren")) {
        window.location.href = '/pages/frieren.html';
    } else if (query.includes("fern")) {
        window.location.href = '/pages/fern.html';
    }
    // Categories
    else if (query.includes("honkai impact")) {
        window.location.href = '/category/honkai-impact-3rd.html';
    } else if (query.includes("hi3")) {
        window.location.href = '/category/honkai-impact-3rd.html';
    } else if (query.includes("genshin impact")) {
        window.location.href = '/category/genshin-impact.html';
    } else if (query.includes("genshin")) {
        window.location.href = '/category/genshin-impact.html';
    } else if (query.includes("honkai star rail")) {
        window.location.href = '/category/honkai-star-rail.html';
    } else if (query.includes("hsr")) {
        window.location.href = '/category/honkai-star-rail.html';
    } else if (query.includes("btr")) {
        window.location.href = '/category/bocchi-the-rock.html';
    } else if (query.includes("gotoubun no hanayome")) {
        window.location.href = '/category/gotoubun-no-hanayome.html';
    } else if (query.includes("gotoubun")) {
        window.location.href = '/category/gotoubun-no-hanayome.html';
    } else if (query.includes("the quintessential quintuplets")) {
        window.location.href = '/category/gotoubun-no-hanayome.html';
    } else if (query.includes("quintessential quintuplets")) {
        window.location.href = '/category/gotoubun-no-hanayome.html';
    } else if (query.includes("hololive")) {
        window.location.href = '/category/hololive.html';
    } else if (query.includes("blue archive")) {
        window.location.href = '/category/blue-archive.html';
    } else if (query.includes("sousou no frieren")) {
        window.location.href = '/category/sousou-no-frieren.html';
    } else {
        modal.style.display = "block";
    }
}