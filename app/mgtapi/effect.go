package mgtapi

import (
	"net/http"

	"github.com/vela-ssoc/vela-manager/app/internal/param"
	"github.com/vela-ssoc/vela-manager/app/route"
	"github.com/vela-ssoc/vela-manager/app/service"
	"github.com/vela-ssoc/vela-manager/app/session"
	"github.com/vela-ssoc/vela-manager/errcode"
	"github.com/xgfone/ship/v5"
)

func Effect(svc service.EffectService) route.Router {
	return &effectREST{svc: svc}
}

type effectREST struct {
	svc service.EffectService
}

func (eff *effectREST) Route(_, bearer, _ *ship.RouteGroupBuilder) {
	bearer.Route("/effects").Data(route.Ignore()).GET(eff.Page)
	bearer.Route("/effect").
		Data(route.Named("创建配置发布")).POST(eff.Create).
		Data(route.Named("更新配置发布")).PUT(eff.Update).
		Data(route.Named("删除配置发布")).DELETE(eff.Delete)
}

func (eff *effectREST) Page(c *ship.Context) error {
	var req param.Page
	if err := c.BindQuery(&req); err != nil {
		return err
	}

	page := req.Pager()
	ctx := c.Request().Context()
	count, dats := eff.svc.Page(ctx, page)
	res := page.Result(count, dats)

	return c.JSON(http.StatusOK, res)
}

func (eff *effectREST) Create(c *ship.Context) error {
	var req param.EffectCreate
	if err := c.Bind(&req); err != nil {
		return err
	}
	if len(req.Compounds) == 0 && len(req.Substances) == 0 {
		return errcode.ErrRequiredSubstanceOrCompound
	}

	ctx := c.Request().Context()
	cu := session.Cast(c.Any)
	taskID, err := eff.svc.Create(ctx, &req, cu.ID)
	if err != nil {
		return err
	}
	res := &param.EffectTaskResp{
		Created: taskID != 0,
		TaskID:  taskID,
	}

	return c.JSON(http.StatusCreated, res)
}

func (eff *effectREST) Update(c *ship.Context) error {
	var req param.EffectUpdate
	if err := c.Bind(&req); err != nil {
		return err
	}
	if len(req.Compounds) == 0 && len(req.Substances) == 0 {
		return errcode.ErrRequiredSubstanceOrCompound
	}

	ctx := c.Request().Context()
	cu := session.Cast(c.Any)
	taskID, err := eff.svc.Update(ctx, &req, cu.ID)
	if err != nil {
		return err
	}
	res := &param.EffectTaskResp{
		Created: taskID != 0,
		TaskID:  taskID,
	}

	return c.JSON(http.StatusCreated, res)
}

func (eff *effectREST) Delete(c *ship.Context) error {
	// ctx := c.Request().Context()
	// eff.svc.Update(ctx)
	return nil
}
