package blink

import (
	"encoding/json"

	"github.com/vela-ssoc/vela-common-mb/dbms"
	"github.com/vela-ssoc/vela-common-mba/encipher"
	"github.com/vela-ssoc/vela-manager/infra/config"
)

// Issue broker 节点认证成功后返回的信息
type Issue struct {
	Name     string        `json:"name"`     // broker 名字
	Passwd   []byte        `json:"passwd"`   // 通信加解密密钥
	Listen   Listen        `json:"listen"`   // 服务监听配置
	Logger   config.Logger `json:"logger"`   // 日志配置
	Database dbms.Config   `json:"database"` // 数据库配置
}

// String fmt.Stringer
func (iss Issue) String() string {
	dat, _ := json.MarshalIndent(iss, "", "    ")
	return string(dat)
}

// encrypt 将 Issue 加密
func (iss Issue) encrypt() ([]byte, error) {
	return encipher.EncryptJSON(iss)
}

// Listen 监听信息
type Listen struct {
	Addr string `json:"addr"` // 监听地址 :8080 192.168.1.2:8080
	Cert []byte `json:"cert"` // 证书
	Pkey []byte `json:"pkey"` // 私钥
}
