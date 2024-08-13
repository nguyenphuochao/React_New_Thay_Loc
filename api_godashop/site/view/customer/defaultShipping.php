<?php require ABSPATH_SITE . 'layout/header.php' ?>
<main id="maincontent" class="page-main">
    <div class="container">
        <div class="row">
            <div class="col-xs-9">
                <ol class="breadcrumb">
                    <li><a href="/" target="_self">Trang chủ</a></li>
                    <li><span>/</span></li>
                    <li class="active"><span>Tài khoản</span></li>
                </ol>
            </div>
            <div class="clearfix"></div>
            <?php require ABSPATH_SITE . 'view/customer/accountSidebar.php' ?>
            <div class="col-md-9 account">
                <div class="row">
                    <div class="col-xs-6">
                        <h4 class="home-title">Địa chỉ giao hàng mặc định</h4>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-md-12">
                        <form action="/index.php?c=customer&amp;a=saveShippingAddress" method="POST" role="form">
                            <?php require ABSPATH_SITE . 'layout/variable_address.php' ?>
                            <?php require ABSPATH_SITE . 'layout/address.php' ?>
                            <div class="row">
                                <div class="form-group col-sm-12">
                                    <button type="submit" class="btn btn-primary pull-right">Cập
                                        nhật</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
<?php require ABSPATH_SITE . 'layout/footer.php' ?>