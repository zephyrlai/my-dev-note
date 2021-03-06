## 目录： 
1. 解析器模块
1. 反射工具箱
1. 类型转换
1. 日志模块
1. 资源加载
1. DataSource
1. Transaction
1. binding模块
1. 缓存模块
1. 本章小结

## 2.1 解析器模块
1. 【基础知识补充】：几种常见的XML解析方式
    1. DOM(Document Object Model)方式  
        1. 概念：整个XML文档读入内存并构建一个DOM树，基于这棵树形结构对各个节点(Node)进行操作
        1. 缺点：因为要将整个XML文档加载到内存中井构造树形结构，当XML文档的数据量较大时，会造成较大的资源消耗。
    1. SAX(Simple API for XML)方式
        1. 概念：是基于事件模型的 XML 解析方式，只需将XML文档的一部分加载到内存中，即可开始解析，在处理过程中井不会在内存中记录XML中的数据，占用的资源比较小；当程序处理过程中满足条件时，也可以立即停止解析过程
        1. 使用：当SAX解析器解析到某类型节点时，会触发注册在该类型节点上的回调函数，开发人员可以根据自己感兴趣的事件注册相应的回调函数。事件是由解析器产生并通过回调函数发送给应用程序的，这种模式也称为“推模式”
        1. 缺点： 
            1. 不存储 XML 文挡的结构，所以需要开发人员自己负责维护业务逻辑涉及的多层节点之间的关系
            1. 是流式处理，所以处理过程只能从XML文档开始向后单向进行，无法像DOM方式那样，自由导航到之前处理过的节点上重新处理，也无法支持XPath。
    1. StaX(Streaming API for XML)方式   
        是与SAX模式类似的流模式，但StAX采用的是“拉模式”：用程序通过调用解析器推进解析的进程。即，应用程序控制着整个解析过程的推进，可以简化应用处理XML文档的代码，并且决定何时停止解析，而且StAX可以同时处理多个XML文档。
1. XPATH简介
    1. 在 XPath 中，有七种类型的节点：元素、属性、文本、命名空间、处理指令、注释以及文档（根）节点。