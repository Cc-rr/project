<?php
   header("Content-type:text/html;charset=utf-8");
    //var_dump($_POST);
    //定义统一返回格式
    $responseData = array('code' =>0, 'msg'=>'');
    //先将post数据取出来
    $username = $_POST['username'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];
    $createtime = $_POST['createtime'];
    
    //验证    进行判断
    if(!$username){
        $responseData['code'] = 1;
        $responseData['msg'] = '用户名不能为空';
        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData['code'] = 2;
        $responseData['msg'] = '密码不能为空';
        echo json_encode($responseData);
        exit;
    }
    if($repassword != $password){
        $responseData['code'] = 3;
        $responseData['msg'] = '两次密码输入不一致';
        echo json_encode($responseData);
        exit;
    }
    //链接数据库判断用户名是否注册
    //链接数据库
    $link = mysql_connect("localhost","root","123456");
    //判断是否链接数据库
    if(!$link){
        echo '数据库连接失败';
        exit;
    }
    //设置访问字符集
    mysql_set_charset('utf8');
    //访问表
    mysql_select_db('qd2005');

    $sql = "select * from users where username='{$username}' "; 


    $res = mysql_query($sql);

    $row = mysql_fetch_assoc($res);

    if($row){
        $responseData['code'] = 4;
        $responseData['msg'] = '用户名已存在';
        echo json_encode($responseData);
        exit;
    }
    $str = md5(md5(md5($password).'qingdao')."qianfeng");
    $sql2 = "INSERT INTO users(username,password,createTime) VALUES('{$username}','{$str}',{$createtime})";
    //发送sql语句
    $res2 = mysql_query($sql2);

    if(!$res2){  //a检查sql  检查数据库字段
        $responseData['code'] = 5;
        $responseData['msg'] = '服务器忙';
        echo json_encode($responseData);
        exit;
    }
    $responseData['msg'] = '注册成功';
    echo json_encode($responseData);

    mysql_close($link);
?>