package com.x.attendance.assemble.control.jaxrs.dingdingstatistic;

import com.x.base.core.project.annotation.JaxrsDescribe;
import com.x.base.core.project.annotation.JaxrsMethodDescribe;
import com.x.base.core.project.annotation.JaxrsParameterDescribe;
import com.x.base.core.project.http.ActionResult;
import com.x.base.core.project.http.EffectivePerson;
import com.x.base.core.project.http.HttpMediaType;
import com.x.base.core.project.jaxrs.ResponseFactory;
import com.x.base.core.project.jaxrs.StandardJaxrsAction;
import com.x.base.core.project.jaxrs.WrapBoolean;
import com.x.base.core.project.logger.Logger;
import com.x.base.core.project.logger.LoggerFactory;

import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.*;
import javax.ws.rs.container.AsyncResponse;
import javax.ws.rs.container.Suspended;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import java.util.List;

/**
 * Created by fancyLou on 2020-04-05.
 * Copyright © 2020 O2. All rights reserved.
 */
@Path("dingdingstatistic")
@JaxrsDescribe("钉钉打卡数据统计管理")
public class DingdingAttendanceStatisticAction extends StandardJaxrsAction {
    private static final Logger logger = LoggerFactory.getLogger(DingdingAttendanceStatisticAction.class);


    @JaxrsMethodDescribe(value = "测试", action = ActionTest.class)
    @GET
    @Path("demo")
    @Produces(HttpMediaType.APPLICATION_JSON_UTF_8)
    @Consumes(MediaType.APPLICATION_JSON)
    public void syncData(@Suspended final AsyncResponse asyncResponse, @Context HttpServletRequest request) {
        ActionResult<WrapBoolean> result = new ActionResult<>();
        EffectivePerson effectivePerson = this.effectivePerson(request);
        try {
            result = new ActionTest().execute();
        }catch (Exception e) {
            logger.error(e, effectivePerson, request, null);
            result.error(e);
        }
        asyncResponse.resume(ResponseFactory.getEntityTagActionResultResponse(request, result));
    }

    @JaxrsMethodDescribe(value = "人员月份统计查询", action = ActionPersonStatistic.class)
    @GET
    @Path("person/{person}/{year}/{month}")
    @Produces(HttpMediaType.APPLICATION_JSON_UTF_8)
    @Consumes(MediaType.APPLICATION_JSON)
    public void personMonth(@Suspended final AsyncResponse asyncResponse, @Context HttpServletRequest request,
                            @JaxrsParameterDescribe("人员") @PathParam("person") String person,
                            @JaxrsParameterDescribe("年份: yyyy") @PathParam("year") String year,
                            @JaxrsParameterDescribe("月份: MM") @PathParam("month") String month) {
        ActionResult<List<ActionPersonStatistic.Wo>> result = new ActionResult<>();
        EffectivePerson effectivePerson = this.effectivePerson(request);
        try {
            result = new ActionPersonStatistic().execute(person, year, month);
        }catch (Exception e) {
            logger.error(e, effectivePerson, request, null);
            result.error(e);
        }
        asyncResponse.resume(ResponseFactory.getEntityTagActionResultResponse(request, result));
    }

    @JaxrsMethodDescribe(value = "部门月份统计查询", action = ActionUnitStatistic.class)
    @GET
    @Path("unit/{unit}/{year}/{month}")
    @Produces(HttpMediaType.APPLICATION_JSON_UTF_8)
    @Consumes(MediaType.APPLICATION_JSON)
    public void unitMonth(@Suspended final AsyncResponse asyncResponse, @Context HttpServletRequest request,
                            @JaxrsParameterDescribe("部门") @PathParam("unit") String unit,
                            @JaxrsParameterDescribe("年份: yyyy") @PathParam("year") String year,
                            @JaxrsParameterDescribe("月份: MM") @PathParam("month") String month) {
        ActionResult<List<ActionUnitStatistic.Wo>> result = new ActionResult<>();
        EffectivePerson effectivePerson = this.effectivePerson(request);
        try {
            result = new ActionUnitStatistic().execute(unit, year, month);
        }catch (Exception e) {
            logger.error(e, effectivePerson, request, null);
            result.error(e);
        }
        asyncResponse.resume(ResponseFactory.getEntityTagActionResultResponse(request, result));
    }

}
