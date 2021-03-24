---
uid: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa
title: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa namespace
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa
qsharp.summary: ''
---

# Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa namespace




<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[IsConstantBooleanFunction](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa.IsConstantBooleanFunction) |Deutsch–Jozsa is a quantum algorithm that decides whether a given Boolean function𝑓 that is promised to either be constant or to be balanced — i.e., taking thevalues 0 and 1 the exact same number of times — is actually constant or balanced.The operation `IsConstantBooleanFunction` answers this question by returning theBoolean value `true` if the function is constant and `false` if it is not. Notethat the promise that the function is either constant or balanced is assumed.
|[RunDeutschJozsa](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa.RunDeutschJozsa) |

## Functions

| Name | Summary |
|------|---------|
|[BooleanFunctionFromMarkedElements](xref:Microsoft.Quantum.Samples.SimpleAlgorithms.DeutschJozsa.BooleanFunctionFromMarkedElements) |Constructs an operation representing a query to a boolean function𝑓(𝑥⃗) for a bitstring 𝑥⃗, such that 𝑓(𝑥⃗) = 1 if and only if the integer𝑘 represented by 𝑥⃗ is an element of a given array.

<!-- /summaries -->
