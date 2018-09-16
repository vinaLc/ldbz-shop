package cn.ldbz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.alibaba.dubbo.spring.boot.annotation.EnableDubboConfiguration;

@EnableDubboConfiguration
//@EnableApolloConfig
@SpringBootApplication
public class XbinStoreWebSearchApplication {

	public static void main(String[] args) {
		SpringApplication.run(XbinStoreWebSearchApplication.class, args);
	}
	
}