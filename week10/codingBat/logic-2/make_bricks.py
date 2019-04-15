def make_bricks(small,big,goal):
    # for checking how much small bricks we needed we use (goal%5)
    if small<(goal%5) or (small+big*5)<goal:
       return False
    else:
       return True