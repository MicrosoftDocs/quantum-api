---
uid: Qdk.Std.Diagnostics.StartCountingOperation
title: StartCountingOperation operation
description: "Q# StartCountingOperation operation: Starts counting the number of times the given operation is called. Fails if the operation is already being counted."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: StartCountingOperation
qsharp.summary: "Starts counting the number of times the given operation is called. Fails if the operation is already being counted."
---

# StartCountingOperation operation

Fully qualified name: Std.Diagnostics.StartCountingOperation

```qsharp
operation StartCountingOperation<'In, 'Out>(callable : ('In => 'Out)) : Unit
```

## Summary
Starts counting the number of times the given operation is called. Fails if the operation is already being counted.

## Description
This operation allows you to count the number of times a given operation is called. If the given operation is already
being counted, calling `StartCountingOperation` again will trigger a runtime failure. Counting is based on the specific
specialization of the operation invoked, so `X` and `Adjoint X` are counted separately.
Likewise `Controlled X`, `CNOT`, and `CX` are independent operations that are counted separately, as are `Controlled X`
and `Controlled Adjoint X`.

## Input
### callable
The operation to be counted.

## Remarks
Counting operation calls requires specific care in what operation is passed as input. For example, `StartCountingOperation(H)` will
count only the number of times `H` is called, while `StartCountingOperation(Adjoint H)` will count only the number of times `Adjoint H` is called, even
though `H` is self-adjoint. This is due to how the execution treats the invocation of these operations as distinct by their specialization.
In the same way, `StartCountingOperation(Controlled X)` will count only the number of times `Controlled X` is called, while
`StartCountingOperation(CNOT)` will count only the number of times `CNOT` is called.

When counting lambdas, the symbol the lambda is bound to is used to identify the operation and it is counted as a separate operation. For example,
```qsharp
let myOp = q => H(q);
StartCountingOperation(myOp);
```
Will count specifically calls to `myOp` and not `H`. By contrast, the following code will count calls to `H` itself:
```qsharp
let myOp = H;
StartCountingOperation(myOp);
```
This is because this code does not define a lambda and instead just creates a binding to `H` directly.
