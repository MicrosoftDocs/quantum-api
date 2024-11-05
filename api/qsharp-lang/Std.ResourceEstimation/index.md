---
uid: qdk.std.resourceestimation-toc
title: Std.ResourceEstimation namespace
description: Table of contents for the Q# Arrays namespace
author: bradben
ms.author: brbenefield
ms.date: 11/04/2024
ms.topic: landing-page
---

# Std.ResourceEstimation

The Std.ResourceEstimation namespace contains the following functions and operations:


| Name | Description |
|------|-------------|
| [AccountForEstimates](xref:Qdk.Std.ResourceEstimation.AccountForEstimates) | Account for the resource estimates of an unimplemented operation, |
| [AuxQubitCount](xref:Qdk.Std.ResourceEstimation.AuxQubitCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation |
| [BeginEstimateCaching](xref:Qdk.Std.ResourceEstimation.BeginEstimateCaching) | Informs the resource estimator of the start of the code fragment |
| [BeginRepeatEstimates](xref:Qdk.Std.ResourceEstimation.BeginRepeatEstimates) | Instructs the resource estimator to assume that the resources from the |
| [CczCount](xref:Qdk.Std.ResourceEstimation.CczCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation |
| [EndEstimateCaching](xref:Qdk.Std.ResourceEstimation.EndEstimateCaching) | Instructs the resource estimator to stop estimates caching |
| [EndRepeatEstimates](xref:Qdk.Std.ResourceEstimation.EndRepeatEstimates) | Companion operation to `BeginRepeatEstimates`. |
| [MeasurementCount](xref:Qdk.Std.ResourceEstimation.MeasurementCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation |
| [PSSPCLayout](xref:Qdk.Std.ResourceEstimation.PSSPCLayout) | Pass the value returned by the function to the `AccountForEstimates` operation |
| [RepeatEstimates](xref:Qdk.Std.ResourceEstimation.RepeatEstimates) | Instructs the resource estimator to assume that the resources from the |
| [RotationCount](xref:Qdk.Std.ResourceEstimation.RotationCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation |
| [RotationDepth](xref:Qdk.Std.ResourceEstimation.RotationDepth) | Returns a tuple that can be passed to the `AccountForEstimates` operation |
| [SingleVariant](xref:Qdk.Std.ResourceEstimation.SingleVariant) | Used to specify that there's only one execution variant in `BeginEstimateCaching` |
| [TCount](xref:Qdk.Std.ResourceEstimation.TCount) | Returns a tuple that can be passed to the `AccountForEstimates` operation |
