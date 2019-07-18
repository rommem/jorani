<!DOCTYPE html>
<html lang="<?php echo $languageCode;?>">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="icon" type="image/x-icon" href="<?php echo base_url();?>favicon.ico" sizes="32x32">
    <title>Jorani</title>
    <?php
    //Pass some configuration to the embedded Vue application
    $config['baseURL'] = base_url() . 'vuejs/';
    $config['pathURL'] = parse_url($config['baseURL'], PHP_URL_PATH) . 'vuejs/';
    $config['languageCode'] = $languageCode;
    $config['csrfTokenName'] = $this->security->get_csrf_token_name();
    $config['csrfHash'] = $this->security->get_csrf_hash();
    ?>
    <script id="configTag" type="application/json"><?php echo json_encode($config); ?></script>
    <link href="<?php echo base_url();?>assets/css/app.css" rel="preload" as="style">
    <link href="<?php echo base_url();?>assets/js/app.js" rel="preload" as="script">
    <link href="<?php echo base_url();?>assets/css/app.css" rel="stylesheet">
  </head>
  <body>
    <div id="app"></div>
    <script type="text/javascript" src="<?php echo base_url();?>assets/js/app.js"></script>
  </body>
</html>
